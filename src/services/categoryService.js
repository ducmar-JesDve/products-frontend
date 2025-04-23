import api from './api';
//obtener las categorias
export const getCategories=async()=>{
    const response=await api.get('/categories');
    return response.data;
};
//registrar una categoria
export const createCategory=async(name)=>{
    const response=await api.post('/categories',{name});
    return response.data;
};