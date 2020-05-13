import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/v1/product',
  withCredentials: true,
});

export const getProduct = () => {
  return service
    .get('/', {})
    .then((response) => response.data);
};

export const createProduct = () => {
  return service
    .post('/', {})
    .then((response) => response.data);
};

export const editProduct = () => {
  return service
    .patch('/', {})
    .then((response) => response.data);
};

export const deleteProduct = () => {
  return service
    .delete('/', {})
    .then((response) => response.data);
};
