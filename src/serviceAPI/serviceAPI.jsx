import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const serviceAPI = {
  addProductQuery(payload) {
    return axios.post('/contacts', payload);
  },

  getProductsQuery() {
    return axios.get('/contacts');
  },

  deletProductQuery(id) {
    return axios.delete(`/contacts/${id}`);
  },
};

export default serviceAPI;
