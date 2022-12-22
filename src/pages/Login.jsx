import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../context/UserActions";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const sendLogin = async (data) => {
    console.log(data);
    dispatch(loginUser(data, navigate));
  };

  return (
    <form
      className="container-login bg-dark "
      onSubmit={handleSubmit(sendLogin)}
    >
      <div className="login">
        <h2>Iniciar Sesion</h2>
        <div className="form-floating mb-3">
          <input
            {...register("email", {
              required: "Campo requerido",
              minLength: 10,
              maxLength: 32,
            })}
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
          />
          <span className="error-email">{errors?.email?.message}</span>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            {...register("password", {
              required: "Campo requerido",
              maxLength: 20,
            })}
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Contraseña"
          />
          <span className="error-pw">{errors?.password?.message}</span>
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesion
        </button>
      </div>
    </form>
  );
};

export default Login;
