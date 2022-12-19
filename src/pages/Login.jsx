import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css"
import Swal from 'sweetalert2'
import { UserContext } from "../context/UserContext";
import { loginUser } from "../context/UserActions";

const login = () => {
  const { state, dispatch} = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const enviarLogin = async (data) => {
    console.log(data);
    dispatch(loginUser(data, navigate))
    
  };

  return (
    <form className="login" onSubmit={handleSubmit(enviarLogin)}>
      <div className="container-login">
      <div>
        <label htmlFor="">Email</label>
        <input {...register("username")} type="email" name="username" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input {...register("password")} type="password" name="password" />
      </div>
      <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default login;
