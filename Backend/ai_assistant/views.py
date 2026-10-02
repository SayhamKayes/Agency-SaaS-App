import os
import time
import uuid
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import AIChatSession, AIChatMessage
from .serializers import AIChatMessageSerializer

class AIChatView(APIView):
    """
    Cognitive AI Assistant Chat Endpoint for SKzLAB.
    Integrates with Gemini API if GEMINI_API_KEY is configured in .env,
    otherwise returns autonomous Foundry intelligence responses.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        user_message = request.data.get('message', '').strip()
        channel = request.data.get('channel', 'web')
        session_id = request.data.get('session_id')

        if not user_message:
            return Response({'error': 'Message content is required'}, status=status.HTTP_400_BAD_REQUEST)

        # Get or create chat session
        if session_id:
            session, _ = AIChatSession.objects.get_or_create(session_id=session_id, defaults={'channel': channel})
        else:
            session = AIChatSession.objects.create(session_id=str(uuid.uuid4()), channel=channel)

        t0 = time.time()

        # Save user message
        AIChatMessage.objects.create(
            session=session,
            role='user',
            content=user_message
        )

        api_key = os.getenv('GEMINI_API_KEY', '').strip()
        reply_content = ""

        if api_key:
            try:
                import requests
                # Direct REST call to Gemini 2.5 Flash
                gemini_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
                payload = {
                    "contents": [{
                        "parts": [{
                            "text": (
                                "You are SKzLAB AI Assistant, the technical copilot of SKz LAB SaaS Foundry and Engineering Venture Studio. "
                                "Answer authoritatively, concisely, and technically regarding SKzLAB products (SKzLab Commerce Engine, CourierPulse AI, OmniAssistant, CloudPulse Sentinel), "
                                "cloud microservice architecture (Django REST, Neon PostgreSQL, React 19), and engineering incubation.\n\n"
                                f"User question: {user_message}"
                            )
                        }]
                    }]
                }
                res = requests.post(gemini_url, json=payload, timeout=8)
                if res.status_code == 200:
                    data = res.json()
                    candidates = data.get('candidates', [])
                    if candidates:
                        parts = candidates[0].get('content', {}).get('parts', [])
                        if parts:
                            reply_content = parts[0].get('text', '')
            except Exception as e:
                reply_content = ""

        # High-precision architectural fallback
        if not reply_content:
            query_lower = user_message.lower()
            if 'product' in query_lower or 'skzlab' in query_lower or 'commerce' in query_lower:
                reply_content = (
                    "SKz LAB builds flagship SaaS systems including the SKzLab Commerce Engine (high-concurrency "
                    "headless multi-tenant e-commerce), CourierPulse AI (geospatial dispatch & rider telemetry), "
                    "OmniAssistant Studio (multimodal support automation), and CloudPulse Sentinel (Envoy API gateway)."
                )
            elif 'architecture' in query_lower or 'django' in query_lower or 'postgres' in query_lower or 'neon' in query_lower:
                reply_content = (
                    "Our architectural stack combines Python/Django REST Framework microservices with Neon Tech "
                    "PostgreSQL for ACID durability, Redis in-memory caching for sub-millisecond locks, and React 19 "
                    "on the frontend. All services feature active-active multi-region failover."
                )
            elif 'contact' in query_lower or 'hire' in query_lower or 'quote' in query_lower:
                reply_content = (
                    "You can engage our engineering foundry directly via our Omnichannel Dispatch (WhatsApp, Email, "
                    "or Web Terminal). Inquiries route directly to our Lead System Architects with guaranteed < 2hr response."
                )
            else:
                reply_content = (
                    f"Hello! I am the SKz LAB Cognitive Copilot. I can assist you with our SaaS architecture specs, "
                    f"product capabilities, API integration pipelines, and custom venture studio incubation."
                )

        latency_ms = round((time.time() - t0) * 1000, 1)

        # Save assistant reply
        bot_msg = AIChatMessage.objects.create(
            session=session,
            role='assistant',
            content=reply_content,
            latency_ms=latency_ms
        )

        return Response({
            'session_id': session.session_id,
            'message': AIChatMessageSerializer(bot_msg).data,
            'latency_ms': latency_ms
        })
