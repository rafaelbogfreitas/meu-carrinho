import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.urlDev + '/api/v1/order',
  baseURL: 'http://159.89.46.33:5000/api/v1/user',
  withCredentials: true,
});

export const getOrder = (orderId) => {
  return service
    .get(`/${orderId}`)
    .then((response) => response.data);
};

export const createOrder = (storeId, body) => {
  return service
    .post(`/${storeId}/new`, { ...body })
    .then((response) => response.data);
};

export const updateOrder = (orderId) => {
  return service
    .patch(`/update/${orderId}`)
    .then((response) => response.data)
    .catch( error => console.log(error));
};

export const deleteOrder = (storeId, orderId) => {
  return service
    .delete(`/delete/${storeId}/${orderId}`)
    .then((response) => response.data)
    .catch(error => console.log(error))
};
