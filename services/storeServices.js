import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/v1/store',
  withCredentials: true,
});

export const getStore = (name) => {
  return service
    .get(`/${name}`)
    .then((response) => response.data);
};

export const createStore = (body) => {
  return service
    .post('/new', body)
    .then((response) => response.data);
};

export const editStore = (id, body) => {
  return service
    .patch(`/edit/${id}`, { ...body })
    .then((response) => response.data);
};

export const deleteStore = (id) => {
  return service
    .delete(`/delete/${id}`)
    .then((response) => response.data);
};
