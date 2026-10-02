from django.contrib import admin
from .models import AIChatSession, AIChatMessage

class AIChatMessageInline(admin.TabularInline):
    model = AIChatMessage
    extra = 0
    readonly_fields = ('role', 'content', 'latency_ms', 'created_at')

@admin.register(AIChatSession)
class AIChatSessionAdmin(admin.ModelAdmin):
    list_display = ('session_id', 'channel', 'user_email', 'created_at')
    list_filter = ('channel', 'created_at')
    search_fields = ('session_id', 'user_email')
    inlines = [AIChatMessageInline]

@admin.register(AIChatMessage)
class AIChatMessageAdmin(admin.ModelAdmin):
    list_display = ('session', 'role', 'content_snippet', 'latency_ms', 'created_at')
    list_filter = ('role', 'created_at')
    search_fields = ('content',)

    def content_snippet(self, obj):
        return obj.content[:50] + '...' if len(obj.content) > 50 else obj.content
