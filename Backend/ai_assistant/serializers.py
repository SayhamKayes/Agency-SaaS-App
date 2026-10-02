from rest_framework import serializers
from .models import AIChatSession, AIChatMessage

class AIChatMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIChatMessage
        fields = ['id', 'role', 'content', 'latency_ms', 'created_at']


class AIChatSessionSerializer(serializers.ModelSerializer):
    messages = AIChatMessageSerializer(many=True, read_only=True)

    class Meta:
        model = AIChatSession
        fields = ['session_id', 'channel', 'user_email', 'messages', 'created_at']
