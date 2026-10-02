from django.contrib import admin
from .models import SystemLog

@admin.register(SystemLog)
class SystemLogAdmin(admin.ModelAdmin):
    list_display = ('level', 'source', 'created_at', 'message_snippet')
    list_filter = ('level', 'source', 'created_at')
    search_fields = ('message', 'source')

    def message_snippet(self, obj):
        return obj.message[:60] + '...' if len(obj.message) > 60 else obj.message
    message_snippet.short_description = 'Message'
