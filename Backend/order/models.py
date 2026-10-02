import uuid
from django.db import models

class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending Approval'),
        ('processing', 'Processing'),
        ('dispatched', 'Dispatched / In Transit'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ]

    PAYMENT_CHOICES = [
        ('unpaid', 'Unpaid'),
        ('paid', 'Paid'),
        ('refunded', 'Refunded'),
    ]

    order_number = models.CharField(max_length=64, unique=True, editable=False)
    customer_name = models.CharField(max_length=128)
    customer_email = models.EmailField()
    customer_phone = models.CharField(max_length=32, blank=True)
    total_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    currency = models.CharField(max_length=8, default='USD')
    status = models.CharField(max_length=32, choices=STATUS_CHOICES, default='pending')
    payment_status = models.CharField(max_length=32, choices=PAYMENT_CHOICES, default='unpaid')
    items = models.JSONField(default=list, blank=True)
    shipping_address = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.order_number:
            self.order_number = f"SKZ-{uuid.uuid4().hex[:8].upper()}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.order_number} - {self.customer_name} ({self.status})"
