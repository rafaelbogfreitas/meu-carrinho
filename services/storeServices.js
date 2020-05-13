import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/v1/store',
  withCredentials: true,
});

export const getStore = () => {
  return service
    .get('/', {})
    .then((response) => response.data);
};

export const createStore = () => {
  return service
    .post('/', {})
    .then((response) => response.data);
};

export const editStore = () => {
  return service
    .patch('/', {})
    .then((response) => response.data);
};

export const deleteStore = () => {
  return service
    .delete('/', {})
    .then((response) => response.data);
};
