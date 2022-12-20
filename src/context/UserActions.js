import { axiosInstance } from "../config/axiosInstance";
import { LOGIN_USER } from "./types";

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
