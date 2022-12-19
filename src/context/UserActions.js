import { axiosInstance } from "../config/axiosInstance";
import { LOGIN_USER, GET_USERS } from "./types";
import Swal from "sweetalert2"
import axios from "axios"


// export const getUsers = async () => {
//   let users;
//   try {
//     users = await axiosInstance.get("/users");
//   } catch (error) {
//     console.log(error);
//   }
//   return {
//     type: GET_USERS,
//     payload: users.data.users,
//   };
// };

export const loginUser = async (data, navigate) => {
  try {
    const login = await axios.post("http://localhost:3000/users/login", data);
    localStorage.setItem("token", login.data.token);
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido',
      showConfirmButton: false,
      timer: 2500
    })
    navigate("/home");
  } catch (error) {
    console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Usuario o Contraseña incorrectos',
      showConfirmButton: false,
      timer: 2500
    })
  }

  return {
    type: LOGIN_USER,
    payload: true
  }
};
