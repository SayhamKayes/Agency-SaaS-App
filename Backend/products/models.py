from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('Enterprise SaaS', 'Enterprise SaaS'),
        ('AI & Automation', 'AI & Automation'),
        ('E-Commerce', 'E-Commerce'),
        ('Logistics', 'Logistics'),
        ('Cloud Infra', 'Cloud Infra'),
    ]

    STATUS_CHOICES = [
        ('Live', 'Live'),
        ('Beta', 'Beta'),
        ('In Incubation', 'In Incubation'),
        ('Enterprise Pilot', 'Enterprise Pilot'),
    ]

    slug = models.SlugField(max_length=64, unique=True, default='prod-item')
    name = models.CharField(max_length=128)
    tagline = models.CharField(max_length=256, blank=True)
    description = models.TextField()
    category = models.CharField(max_length=64, choices=CATEGORY_CHOICES, default='Enterprise SaaS')
    status = models.CharField(max_length=32, choices=STATUS_CHOICES, default='Live')
    mrr = models.CharField(max_length=32, default='$10,000')
    active_users = models.CharField(max_length=32, default='10,000+')
    uptime = models.CharField(max_length=16, default='99.99%')
    features = models.JSONField(default=list, blank=True)
    tech_stack = models.JSONField(default=list, blank=True)
    is_featured = models.BooleanField(default=False)
    is_latest_launch = models.BooleanField(default=False)
    launch_date = models.CharField(max_length=32, default='2026-09-01')
    demo_url = models.URLField(max_length=256, blank=True)
    accent_color = models.CharField(max_length=16, default='#F05A28')
    architecture_tier = models.CharField(max_length=64, default='Tier-1 Distributed Core')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-is_featured', '-is_latest_launch', '-created_at']

    def __str__(self):
        return f"{self.name} ({self.category}) - {self.status}"
