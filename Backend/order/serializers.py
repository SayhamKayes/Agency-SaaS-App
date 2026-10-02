from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            'id',
            'order_number',
            'customer_name',
            'customer_email',
            'customer_phone',
            'total_amount',
            'currency',
            'status',
            'payment_status',
            'items',
            'shipping_address',
            'created_at',
            'updated_at'
        ]
        read_only_fields = ['order_number', 'created_at', 'updated_at']
