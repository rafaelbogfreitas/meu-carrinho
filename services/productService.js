import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/v1/product',
  withCredentials: true,
});

export const getProduct = (productId) => {
  return service
    .get(`/${productId}`)
    .then((response) => response.data);
};

export const createProduct = (storeId, body) => {
  return service
    .post(`/${storeId}/new`, { ...body })
    .then((response) => response.data);
};

export const editProduct = (productId, body) => {
  return service
    .patch(`/edit/${productId}`, { ...body })
    .then((response) => response.data);
};

export const deleteProduct = (storeId, productId) => {
  return service
    .delete(`delete/${storeId}/${productId}`)
    .then((response) => response.data);
};
