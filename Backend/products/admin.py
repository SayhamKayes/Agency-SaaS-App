from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'status', 'mrr', 'uptime', 'is_featured', 'is_latest_launch')
    list_filter = ('category', 'status', 'is_featured', 'is_latest_launch')
    search_fields = ('name', 'tagline', 'description')
    prepopulated_fields = {'slug': ('name',)}
