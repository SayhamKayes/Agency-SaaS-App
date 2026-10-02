from django.test import TestCase
from django.urls import reverse

class ApiHealthTests(TestCase):
    def test_health_endpoint(self):
        response = self.client.get(reverse('api-health'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json().get('status'), 'healthy')
