// import { axiosInstance } from ""
import { LOGIN_USER, GET_USERS } from "./types";



export const getUsers = async () => {
  let users;
  try {
    users = await axiosInstance.get("/users");
  } catch (error) {
    console.log(error);
  }
  return {
    type: GET_USERS,
    payload: users.data.users,
  };
};

export const loginUser = async (data, navigate) => {
  try {
    const login = await axios.post("http://localhost:3000/login", data);
    // const login = await axiosInstance.post("/users/login", data);
    localStorage.setItem("token", login.data.token);

    navigate("/home");
  } catch (error) {
    console.log(error);
  }

  return {
    type: LOGIN_USER,
    payload: true
  }
};
