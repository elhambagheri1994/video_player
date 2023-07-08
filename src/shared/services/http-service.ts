import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3002/';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw new Error(error.response.data as string) || 'an Error occurred';
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};
