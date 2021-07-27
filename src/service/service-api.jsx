import axios from 'axios';

axios.defaults.baseURL = `https://connections-api.herokuapp.com/`;

const apiService = {
  getCurrentUser() {
    return axios.get(`/users/current`);
  },

  logInUser(credentials) {
    return axios.post(`/users/login`, credentials);
  },

  registerUser(credentials) {
    return axios.post(`/users/signup`, credentials);
  },

  logOutUser() {
    return axios.post(`/users/logout`);
  },
};

export default apiService;
