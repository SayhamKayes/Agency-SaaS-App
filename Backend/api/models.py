from django.db import models

class SystemLog(models.Model):
    """Logs system events, webhook dispatches, and API metrics."""
    LEVEL_CHOICES = [
        ('INFO', 'Information'),
        ('WARNING', 'Warning'),
        ('ERROR', 'Error'),
        ('CRITICAL', 'Critical'),
    ]
    level = models.CharField(max_length=16, choices=LEVEL_CHOICES, default='INFO')
    source = models.CharField(max_length=64, default='api')
    message = models.TextField()
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.level}] {self.source} - {self.created_at.strftime('%Y-%m-%d %H:%M:%S')}"
