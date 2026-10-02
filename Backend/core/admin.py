from django.contrib import admin
from .models import ContactMessage, BusinessUnit, Testimonial, GlobalNode

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'channel', 'subject', 'status', 'created_at')
    list_filter = ('channel', 'status', 'created_at')
    search_fields = ('name', 'email', 'subject', 'message')

@admin.register(BusinessUnit)
class BusinessUnitAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'team_size', 'flagship')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('author', 'company', 'metric', 'product_used')
    search_fields = ('author', 'company', 'quote')

@admin.register(GlobalNode)
class GlobalNodeAdmin(admin.ModelAdmin):
    list_display = ('city', 'country', 'node_type', 'latency', 'active_services')
    list_filter = ('node_type', 'country')
