import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketboxbackend.herokuapp.com'
});

export default api;