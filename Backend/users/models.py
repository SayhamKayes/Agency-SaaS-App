from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Studio Admin / Lead Architect'),
        ('engineer', 'Staff Systems Engineer'),
        ('client', 'Enterprise Client'),
        ('partner', 'Venture Partner'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile', null=True, blank=True)
    full_name = models.CharField(max_length=128)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=32, choices=ROLE_CHOICES, default='client')
    company = models.CharField(max_length=128, blank=True)
    phone = models.CharField(max_length=32, blank=True)
    avatar_url = models.URLField(max_length=256, blank=True)
    bio = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} ({self.role}) - {self.company}"
