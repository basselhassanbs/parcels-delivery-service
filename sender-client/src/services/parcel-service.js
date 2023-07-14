import apiClient from './api-client';

class ParcelService {
  getAll() {
    return apiClient.get('/parcels/senderParcels', {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }
  create(data) {
    return apiClient.post('/parcels', data, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }
}

export default new ParcelService();
