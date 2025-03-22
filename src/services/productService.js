import api from './api';

export const getProducts=async()=>{
    const response=await api.get('/products');
    return response.data;
};

export const createProducts = async (product) => {
    const response = await api.post('/products', product);
    return response.data;
  };