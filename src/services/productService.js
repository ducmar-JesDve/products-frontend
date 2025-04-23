import api from './api';
//obtener los productos
export const getProducts=async()=>{
    const response=await api.get('/products');
    return response.data;
};
//registrar un producto
export const createProducts = async (product) => {
    const response = await api.post('/products', product);
    return response.data;
};