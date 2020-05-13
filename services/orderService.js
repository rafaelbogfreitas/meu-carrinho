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

export const getOrder = () => {
  return service
    .post('/', {})
    .then((response) => response.data);
};

export const getOrder = () => {
  return service
    .patch('/', {})
    .then((response) => response.data);
};

export const getOrder = () => {
  return service
    .delete('/', {})
    .then((response) => response.data);
};
