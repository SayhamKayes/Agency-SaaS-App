import time
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import ContactMessage, BusinessUnit, Testimonial, GlobalNode
from .serializers import (
    ContactMessageSerializer,
    BusinessUnitSerializer,
    TestimonialSerializer,
    GlobalNodeSerializer
)

class ContactMessageViewSet(viewsets.ModelViewSet):
    """
    Omnichannel contact message gateway.
    Supports receiving messages across WhatsApp, Email, Messenger, Instagram, and Web.
    """
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]

    @action(detail=True, methods=['post'])
    def reply(self, request, pk=None):
        msg = self.get_object()
        reply_text = request.data.get('message', '').strip()
        channel = request.data.get('channel', msg.channel)

        if not reply_text:
            return Response({'error': 'Reply text is required'}, status=status.HTTP_400_BAD_REQUEST)

        reply_entry = {
            'id': f'rep-{int(time.time()*1000)}',
            'channel': channel,
            'message': reply_text,
            'timestamp': time.strftime('%Y-%m-%dT%H:%M:%SZ')
        }

        msg.replies.append(reply_entry)
        msg.status = 'replied'
        msg.save()

        return Response(ContactMessageSerializer(msg).data)


class BusinessUnitViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BusinessUnit.objects.all()
    serializer_class = BusinessUnitSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
    permission_classes = [permissions.AllowAny]


class GlobalNodeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GlobalNode.objects.all()
    serializer_class = GlobalNodeSerializer
    permission_classes = [permissions.AllowAny]
