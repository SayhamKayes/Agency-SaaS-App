from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ContactMessageViewSet,
    BusinessUnitViewSet,
    TestimonialViewSet,
    GlobalNodeViewSet
)

router = DefaultRouter()
router.register(r'messages', ContactMessageViewSet, basename='message')
router.register(r'units', BusinessUnitViewSet, basename='unit')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'nodes', GlobalNodeViewSet, basename='node')

urlpatterns = [
    path('', include(router.urls)),
]
