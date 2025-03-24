import axios from 'axios';

const api = axios.create({
    
    baseURL: 'https://mi-backend-duc.onrender.com/api',
});

export default api;