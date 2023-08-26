import axiosInstance from '../libs/axiosInstance';

describe('axiosInstance', () => {
  it('should return data from the API', async () => {
    const response = await axiosInstance.get('/users/github');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('login');
    expect(response.data).toHaveProperty('name');
  });

  it('should handle errors from the API', async () => {
    try {
      await axiosInstance.get('/users/invalid-user');
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toHaveProperty('message');
    }
  });
});