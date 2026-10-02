from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.api_overview, name='api-overview'),
    path('health/', views.health_check, name='api-health'),
    path('products/', include('products.urls')),
    path('orders/', include('order.urls')),
    path('users/', include('users.urls')),
    path('ai/', include('ai_assistant.urls')),
    path('core/', include('core.urls')),
]
