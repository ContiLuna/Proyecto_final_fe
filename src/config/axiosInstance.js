import axios from "axios";

axios.defaults.baseURL = ""
export const axiosIntance = axios.create()