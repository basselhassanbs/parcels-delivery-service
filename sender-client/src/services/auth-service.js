import apiClient from './api-client';

class AuthService {
  signin(data) {
    return apiClient.post('/auth/sender', data);
  }
}

export default new AuthService();
