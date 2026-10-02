/**
 * SKzLAB Frontend API Service Client
 * Connects seamlessly to Django REST Framework backend with intelligent fallback.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...options.headers
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.warn(`[SKzLAB API Client] Request to ${url} failed:`, error.message);
      throw error;
    }
  }

  // Health check
  async getHealth() {
    return this.request('/health/');
  }

  // Products CRUD
  async getProducts() {
    return this.request('/products/');
  }

  async getProduct(id) {
    return this.request(`/products/${id}/`);
  }

  async createProduct(data) {
    return this.request('/products/', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async updateProduct(id, data) {
    return this.request(`/products/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  }

  async deleteProduct(id) {
    return this.request(`/products/${id}/`, {
      method: 'DELETE'
    });
  }

  // Orders
  async getOrders() {
    return this.request('/orders/');
  }

  async createOrder(orderData) {
    return this.request('/orders/', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  }

  // AI Assistant Chat
  async sendChatMessage(message, sessionData = {}) {
    return this.request('/ai/chat/', {
      method: 'POST',
      body: JSON.stringify({ message, ...sessionData })
    });
  }

  // Contact Messages & Omnichannel
  async getMessages() {
    return this.request('/core/messages/');
  }

  async sendMessage(msgData) {
    return this.request('/core/messages/', {
      method: 'POST',
      body: JSON.stringify(msgData)
    });
  }
}

export const api = new ApiClient(API_BASE_URL);
export default api;
