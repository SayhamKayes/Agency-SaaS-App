"""
URL configuration for skzlab project.
"""
from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def api_root(request):
    return JsonResponse({
        "project": "SKzLAB Foundry & Venture Studio Core API",
        "version": "3.8.0",
        "status": "online",
        "architecture": "Django REST Framework + Neon/PostgreSQL Distributed Microservices",
        "endpoints": {
            "api_overview": "/api/",
            "health": "/api/health/",
            "products": "/api/products/",
            "orders": "/api/orders/",
            "users": "/api/users/",
            "ai_assistant": "/api/ai/",
            "core": "/api/core/",
            "admin": "/admin/"
        }
    })

urlpatterns = [
    path('', api_root, name='root'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
