from django.db import models

class ContactMessage(models.Model):
    CHANNEL_CHOICES = [
        ('email', 'Email Desk'),
        ('whatsapp', 'WhatsApp Direct'),
        ('messenger', 'Messenger'),
        ('instagram', 'Instagram DM'),
        ('web', 'Web Terminal'),
    ]

    STATUS_CHOICES = [
        ('unread', 'Unread'),
        ('replied', 'Replied'),
    ]

    name = models.CharField(max_length=128)
    email = models.EmailField()
    phone = models.CharField(max_length=32, blank=True)
    company = models.CharField(max_length=128, blank=True)
    channel = models.CharField(max_length=32, choices=CHANNEL_CHOICES, default='email')
    subject = models.CharField(max_length=256, default='Enterprise SaaS Inquiry')
    message = models.TextField()
    status = models.CharField(max_length=16, choices=STATUS_CHOICES, default='unread')
    replies = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.channel.upper()}] {self.name} - {self.subject} ({self.status})"


class BusinessUnit(models.Model):
    slug = models.SlugField(max_length=64, unique=True)
    title = models.CharField(max_length=128)
    subtitle = models.CharField(max_length=128)
    tagline = models.CharField(max_length=256)
    description = models.TextField()
    capabilities = models.JSONField(default=list)
    team_size = models.CharField(max_length=64)
    flagship = models.CharField(max_length=128)
    icon_name = models.CharField(max_length=32, default='Rocket')

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    author = models.CharField(max_length=128)
    role = models.CharField(max_length=128)
    company = models.CharField(max_length=128)
    quote = models.TextField()
    avatar_text = models.CharField(max_length=8, default='SK')
    metric = models.CharField(max_length=64)
    product_used = models.CharField(max_length=128)

    def __str__(self):
        return f"{self.author} ({self.company})"


class GlobalNode(models.Model):
    city = models.CharField(max_length=64)
    country = models.CharField(max_length=64)
    region = models.CharField(max_length=64)
    node_type = models.CharField(max_length=64, default='Cloud Hub')
    latency = models.IntegerField(default=20)
    active_services = models.IntegerField(default=16)
    coordinates = models.JSONField(default=dict)
    details = models.TextField()

    def __str__(self):
        return f"{self.city} ({self.country}) - {self.latency}ms"
