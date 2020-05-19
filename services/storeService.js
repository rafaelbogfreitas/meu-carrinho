import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.urlDev + '/api/v1/store',
  baseURL: 'https://projeto-3-meu-carrinho.herokuapp.com/api/v1/store',
  withCredentials: true,
});

export const getStore = (name) => {
  return service
    .get(`/${name}`)
    .then((response) => response.data);
};

export const createStore = (data) => {
  return service
    .post('/new', data)
    .then((response) => response.data);
};

export const editStore = (id, data) => {
  return service
    .patch(`/edit/${id}`, data)
    .then((response) => response.data);
};

export const deleteStore = (id) => {
  return service
    .delete(`/delete/${id}`)
    .then((response) => response.data);
};
