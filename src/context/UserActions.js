import { axiosInstance } from "../config/axiosInstance";
import { GET_ALL_PEDIDOS, GET_ALL_PRODUCTS, GET_ALL_USERS, LOGIN_USER } from "./types";
import Swal from 'sweetalert2';

export const createProducts = async (formData) => {
    try {
        await axiosInstance.post("/menu", formData, {
            headers:{
                "Content-Type":"multipart/form-data",
            }
         })
         Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu producto se ha agregado con exito!',
            showConfirmButton: false,
            timer: 1500
          })
    } catch (error) {
        console.log(error)
    }
}


export const loginUser = async (data, navigate) => {
  try {
    const login = await axiosInstance.post("/login", data);
    localStorage.setItem("token", login.data.token);
    navigate("/home");
  } catch (error) {
    console.log(error);
  }

  return {
    type: LOGIN_USER,
    payload: true,
  };
};

export const getAllUsers = async () => {
  let response;
  try {
    response = await axiosInstance.get("/alluser");
    console.log(response.data.users)
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_ALL_USERS,
    payload: response.data.users,
  }
}

export const getAllProducts = async () => {
  let response;
  try {
    response = await axiosInstance.get("/menu");
    console.log(response.data.menus)
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_ALL_PRODUCTS,
    payload: response.data.menus,
  }
}

export const getAllPedidos = async () => {
  let response;
  try {
    response = await axiosInstance.get("/pedido");
    console.log(response.data.pedidos)
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_ALL_PEDIDOS,
    payload: response.data.pedidos,
  }
}