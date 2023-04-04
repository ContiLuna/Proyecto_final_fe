import axios from 'axios';

//axios.defaults.baseURL = 'https://proyectofinalbe-production.up.railway.app/';
//axios.defaults.baseURL = 'https://proyectofinalbe-production-71f3.up.railway.app';
//axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.baseURL = 'messy-border-production.up.railway.app';
export const axiosInstance = axios.create();