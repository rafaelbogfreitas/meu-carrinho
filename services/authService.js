import axios from 'axios';

const service = axios.create({
  // baseURL: process.env.urlDev + '/api/v1/auth',
  baseURL: 'http://159.89.46.33:5000/api/v1/auth',
  withCredentials: true
});

export const signup = (name, email, password) => {
  return service
    .post('/signup', { name, email, password })
    .then((response) => response.data);
};

export const login = (email, password) => {
  return service
    .post('/login', { email, password })
    .then((response) => response.data);
};

export const loggedin = () => {
  return service.get('/loggedin')
  .then((response) => response.data);
};

export const logout = () => {
  return service.get('/logout')
  .then((response) => response.data);
};
