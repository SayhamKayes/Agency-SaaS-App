from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    # Field aliases to seamlessly support Frontend camelCase conventions
    id = serializers.CharField(source='slug', read_only=False)
    activeUsers = serializers.CharField(source='active_users', required=False)
    isFeatured = serializers.BooleanField(source='is_featured', required=False)
    isLatestLaunch = serializers.BooleanField(source='is_latest_launch', required=False)
    launchDate = serializers.CharField(source='launch_date', required=False)
    techStack = serializers.ListField(source='tech_stack', required=False)
    demoUrl = serializers.CharField(source='demo_url', required=False, allow_blank=True)
    accentColor = serializers.CharField(source='accent_color', required=False)
    architectureTier = serializers.CharField(source='architecture_tier', required=False)

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'tagline',
            'description',
            'category',
            'status',
            'mrr',
            'activeUsers',
            'uptime',
            'features',
            'techStack',
            'isFeatured',
            'isLatestLaunch',
            'launchDate',
            'demoUrl',
            'accentColor',
            'architectureTier',
            'created_at',
            'updated_at'
        ]
