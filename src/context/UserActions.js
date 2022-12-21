import { axiosInstance } from "../config/axiosInstance";
import { LOGIN_USER } from "./types";
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
