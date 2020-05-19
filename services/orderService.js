import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.urlDev + '/api/v1/order',
  baseURL: process.env.apiUrl + '/order',
  withCredentials: true,
});

export const getOrder = (orderId) => {
  return service
    .get(`/${orderId}`)
    .then((response) => response.data);
};

export const getOrders = (start, end) => {
  return service
    .get(`/${start}/${end}`)
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
