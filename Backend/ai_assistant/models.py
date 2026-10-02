import uuid
from django.db import models

class AIChatSession(models.Model):
    session_id = models.CharField(max_length=64, unique=True, default=uuid.uuid4)
    channel = models.CharField(max_length=32, default='web')
    user_email = models.EmailField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Session {self.session_id[:8]} ({self.channel})"


class AIChatMessage(models.Model):
    ROLE_CHOICES = [
        ('user', 'User'),
        ('assistant', 'SKzLAB Assistant'),
        ('system', 'System Context'),
    ]

    session = models.ForeignKey(AIChatSession, on_delete=models.CASCADE, related_name='messages')
    role = models.CharField(max_length=16, choices=ROLE_CHOICES)
    content = models.TextField()
    latency_ms = models.FloatField(default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"[{self.role}] {self.content[:40]}..."
