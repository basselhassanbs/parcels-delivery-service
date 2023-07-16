import apiClient from './api-client';

class ParcelService {
  getAll() {
    return apiClient.get('/parcels/bikerParcels', {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }
  getAllWaiting() {
    return apiClient.get('/parcels/waiting', {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }
  pickup(id, data) {
    return apiClient.patch(`/parcels/${id}/pickup`, data, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }
  deliver(id) {
    return apiClient.patch(
      `/parcels/${id}/deliver`,
      {},
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    );
  }
}

export default new ParcelService();
