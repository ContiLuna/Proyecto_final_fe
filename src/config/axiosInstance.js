import axios from 'axios';

//axios.defaults.baseURL = 'https://proyectofinalbe-production.up.railway.app/';
axios.defaults.baseURL = 'http://localhost:8080';
export const axiosInstance = axios.create();