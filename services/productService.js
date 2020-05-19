import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.urlDev+ '/api/v1/product',
  baseURL: 'http://159.89.46.33:5000/api/v1/product',
  withCredentials: true,
});

export const getProduct = (productId) => {
  return service
    .get(`/${productId}`)
    .then((response) => response.data);
};

export const createProduct = (storeId, data) => {
  return service
    .post(`/${storeId}/new`, data)
    .then((response) => response.data);
};

export const editProduct = (productId, data) => {
  return service
    .patch(`/edit/${productId}`, data)
    .then((response) => response.data);
};

export const deleteProduct = (storeId, productId) => {
  return service
    .delete(`delete/${storeId}/${productId}`)
    .then((response) => response.data);
};
