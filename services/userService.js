import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.urlDev + '/api/v1/user',
  baseURL: process.env.apiUrl + '/user',
  withCredentials: true,
});



export const getUser = (id) => {
  return service
    .get(`/${id}`)
    .then((response) => response.data);
};

export const editUser = (id, body) => {
  return service
    .patch(`/edit/${id}`, body)
    .then((response) => response.data);
};

export const deleteOrder = (id) => {
  return service
    .delete(`/delete/${id}`)
    .then((response) => response.data);
};
