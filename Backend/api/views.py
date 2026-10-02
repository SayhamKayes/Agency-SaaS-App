import time
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.conf import settings
from django.db import connection

@api_view(['GET'])
@permission_classes([AllowAny])
def api_overview(request):
    """Returns directory of all active SKzLAB API endpoints."""
    return Response({
        "status": "online",
        "service": "SKzLAB Microservices Central Hub",
        "version": "3.8.0",
        "database_engine": "Neon PostgreSQL" if settings.USE_NEON else "SQLite Local",
        "routes": {
            "health": "/api/health/",
            "products": "/api/products/",
            "orders": "/api/orders/",
            "users": "/api/users/",
            "ai_chat": "/api/ai/chat/",
            "core_messages": "/api/core/messages/",
            "business_units": "/api/core/units/",
            "testimonials": "/api/core/testimonials/",
            "nodes": "/api/core/nodes/"
        }
    })

@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    """Comprehensive health & database connectivity probe."""
    db_healthy = True
    db_latency_ms = 0.0

    try:
        t0 = time.time()
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1;")
            cursor.fetchone()
        db_latency_ms = round((time.time() - t0) * 1000, 2)
    except Exception as exc:
        db_healthy = False

    return Response({
        "status": "healthy" if db_healthy else "degraded",
        "timestamp": time.time(),
        "database": {
            "engine": "Neon PostgreSQL" if settings.USE_NEON else "SQLite",
            "connected": db_healthy,
            "latency_ms": db_latency_ms
        },
        "cors_origins": settings.CORS_ALLOWED_ORIGINS,
        "debug_mode": settings.DEBUG
    })
