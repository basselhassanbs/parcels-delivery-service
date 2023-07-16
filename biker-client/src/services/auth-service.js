import apiClient from './api-client';

class AuthService {
  signin(data) {
    return apiClient.post('/auth/biker', data);
  }
}

export default new AuthService();
