import axios from 'axios';

axios.defaults.baseURL = 'https://proyectofinalbe-production.up.railway.app/';
export const axiosInstance = axios.create();