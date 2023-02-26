import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./loginStyle.css";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../context/UserActions";
import "bootstrap/dist/css/bootstrap.min.css";
import imgDelivery from "../assets/delivery-guy-1424808_1280.png";
import Swal from "sweetalert2";
import Loader from "../components/Loader/Loader";

const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  iconColor: "white",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const setHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const sendLogin = async (data) => {
    setLoading(true);
    console.log(data);
    Toast.fire({
      icon: "error",
      title: "Error",
      background: "red",
      color: "white",
    });
    dispatch(loginUser(data, navigate, setLoading));
  };

  return (
    <div className="login_page_container">
      <div className="login_page_izq">
        {/* food delivery image */}
        <img
          src={imgDelivery}
          alt="food-delivery"
          border="0"
          className="img-delivery"
        />
      </div>
      <div className="login_page_der">
        <form className="container-login" onSubmit={handleSubmit(sendLogin)}>
          <div className="login">
            <img src="https://i.ibb.co/x27ShPx/Ok-food-191919.png" alt="" />
            <div className="form-floating mb-3">
              <input
                {...register("email", {
                  required: "El Email es obligatorio",
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
            <div className="form-floating input-container">
              <input
                {...register("password", {
                  required: "La Contraseña es obligatoria",
                  maxLength: 20,
                })}
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Contraseña"
              />
              <button
                className="show-hide"
                type="button"
                onClick={setHidePassword}
              >
                {showPassword ? (
                  <i class="bi bi-eye-slash-fill"></i>
                ) : (
                  <i class="bi bi-eye-fill"></i>
                )}
              </button>
              <span className="error-pw">{errors?.password?.message}</span>
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            {
              // despues el texto cargando cambiarlo por el componente loader
              loading ? (
                "cargando..."
              ) : (
                <button type="submit" className="login-btn">
                  Iniciar sesión
                </button>
              )
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
