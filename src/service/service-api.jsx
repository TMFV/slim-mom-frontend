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
  addProductQuery(payload) {
    return axios.post('/contacts', payload);
  },

  getProductsQuery() {
    return axios.get('/contacts');
  },

  deletProductQuery(id) {
    return axios.delete(`/contacts/${id}`);
  },

  searchProductQuery(value) {
    const url = `https://restcountries.eu/rest/v2/name/${value}`;

    return fetch(url)
      .then(res => res.json())
      .catch(error => console.log(error));
    // https: return axios.get(`/contacts/value`);
  },
};

export default apiService;
