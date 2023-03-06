import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";
import { CREATE_USER_SCHEMA } from "../../utils/formValidations";
import Loader from "../Loader/Loader";
import NotificacionesApp from "../Notificaciones/NotificacionesApp";
import "./formularioRegistro.css";

const FormularioRegistro = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CREATE_USER_SCHEMA),
  });
  const navigate = useNavigate();

  const setHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const setHidePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };


  const verificarUsuarioExistente = async (email) => {
    try {
      const respuesta = await axiosInstance.get(`/user/${email}`);
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  const enviarFormulario = async (data) => {
    setIsLoading(true);
    try {
      const registro = await axiosInstance.post("/register", data);
      console.log(registro.data);
      NotificacionesApp.success("Registro exitoso", "Bienvenido a OkFood");
      navigate("/login");
      setIsLoading(false);
    } catch (error) {
      console.log(error.response.data.mensaje);
      NotificacionesApp.error(error.response.data.mensaje);
      setIsLoading(false);
    }
  };
  return (
    <div className="form__registro__container">
      <div className="mb-5">
        <h2>Registro Clientes</h2>
      </div>
      <form onSubmit={handleSubmit(enviarFormulario)} className="formRegister">
        <div className="form-floating mb-3">
          <input
            {...register("nombre", {
              required: "El Nombre es obligatorio",
              minLength: 10,
              maxLength: 32,
            })}
            type="text"
            name="nombre"
            className="form-control"
            id="floatingInput"
            placeholder="Nombre"
          />
          <span className="error-email">{errors?.nombre?.message}</span>
          <label htmlFor="floatingInput">Nombre</label>
        </div>
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
        <div className="form-floating input-container">
          <input
            {...register("passwordConfirmation", {
              required: "La Contraseña es obligatoria",
              maxLength: 20,
            })}
            type={showPasswordConfirm ? "text" : "password"}
            name="passwordConfirmation"
            className="form-control"
            id="floatingPassword"
            placeholder="Contraseña"
          />
          <button
            className="show-hide"
            type="button"
            onClick={setHidePasswordConfirm}
          >
            {showPasswordConfirm ? (
              <i class="bi bi-eye-slash-fill"></i>
            ) : (
              <i class="bi bi-eye-fill"></i>
            )}
          </button>
          <span className="error-pw">{errors?.passwordConfirmation?.message}</span>
          <label htmlFor="floatingPassword">Confirmar contraseña</label>
        </div>

        <div>
          {isLoading ? (
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <Loader />
            </div>
          ) : (
            <button className="btn_registro">Registrarse</button>
          )}
        </div>
      </form>
      {/* si ya tenes cuenta */}
      <div className="tenes_cuenta">
        <p>¿Ya tenes cuenta?</p>
        <Link to="/login">Ingresar</Link>
      </div>
    </div>
  );
};

export default FormularioRegistro;
