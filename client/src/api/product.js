import axios from './axios'

export const getProductsRequest = () => axios.get('/products');

export const getProductRequest = (id) => axios.get(`/products/${id}`);

export const createProductRequest = (product) => axios.post('/products', product);

export const updateProductRequest = (id, product) => axios.put(`/products/edit/${id}`, product);

export const deleteProductRequest = (id) => axios.delete(`/products/delete/${id}`);

