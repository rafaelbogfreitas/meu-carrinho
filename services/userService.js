import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/v1/user',
  withCredentials: true,
});

export const getUser = () => {
  return service
    .get('/', {})
    .then((response) => response.data);
};

export const editUser = () => {
  return service
    .patch('/', {})
    .then((response) => response.data);
};

export const deleteOrder = () => {
  return service
    .delete('/', {})
    .then((response) => response.data);
};
