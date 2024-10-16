import axios from 'axios';

const api = axios.create({
    baseURL: 'https://react-product-f5c66-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default api;