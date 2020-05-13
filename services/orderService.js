import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/v1/order',
  withCredentials: true,
});

export const getOrder = () => {
  return service
    .get('/', {})
    .then((response) => response.data);
};

export const createOrder = () => {
  return service
    .post('/', {})
    .then((response) => response.data);
};

export const updateOrder = () => {
  return service
    .patch('/', {})
    .then((response) => response.data);
};

export const deleteOrder = () => {
  return service
    .delete('/', {})
    .then((response) => response.data);
};
