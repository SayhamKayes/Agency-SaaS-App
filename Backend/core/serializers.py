from rest_framework import serializers
from .models import ContactMessage, BusinessUnit, Testimonial, GlobalNode

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


class BusinessUnitSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=False)
    teamSize = serializers.CharField(source='team_size')
    iconName = serializers.CharField(source='icon_name')

    class Meta:
        model = BusinessUnit
        fields = [
            'id',
            'title',
            'subtitle',
            'tagline',
            'description',
            'capabilities',
            'teamSize',
            'flagship',
            'iconName'
        ]


class TestimonialSerializer(serializers.ModelSerializer):
    avatarText = serializers.CharField(source='avatar_text')
    productUsed = serializers.CharField(source='product_used')

    class Meta:
        model = Testimonial
        fields = [
            'id',
            'author',
            'role',
            'company',
            'quote',
            'avatarText',
            'metric',
            'productUsed'
        ]


class GlobalNodeSerializer(serializers.ModelSerializer):
    type = serializers.CharField(source='node_type')
    activeServices = serializers.IntegerField(source='active_services')

    class Meta:
        model = GlobalNode
        fields = [
            'id',
            'city',
            'country',
            'region',
            'type',
            'latency',
            'activeServices',
            'coordinates',
            'details'
        ]
