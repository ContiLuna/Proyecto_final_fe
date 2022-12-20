import { axiosInstance } from "../config/axiosInstance";

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