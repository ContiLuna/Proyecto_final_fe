import React, { useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { axiosInstance } from "../config/axiosInstance";
import "../Styles/FormRegister.css";

const RegistroForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const setHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const setHidePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const verificarUsuarioExistente = async (email) => {
    try {
      const respuesta = await axiosInstance.get(`/user/${email}`);
      return respuesta
    } catch (error) {
      console.log(error);
    }
  }

  const enviarFormulario = async (data) => {

    if (data.password !== data.passwordConfirmation) {
      //Terminar, todavia no muestra el mensaje en la pantalla
      return;
    }

    const usuarioExiste = await verificarUsuarioExistente(data.email);
    if (usuarioExiste) {
      //Terminar, todavia no muestra el mensaje en la pantalla
      return;
    }

    try {
      const registro = await axiosInstance.post('/register', data);
      console.log(registro.data);
    } catch (error) {
      console.log(error.response.data)
    }
  };

  return (
    <div className="form-register">
      <form className="in-form" onSubmit={handleSubmit(enviarFormulario)}>
        <div className="input" >
          <h1 className="registrarse">Registrarse</h1>
          <div>
            <input className="input"
              {...register('nombre', { required: "El Nombre es requerido" })}
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
            />
            {errors && errors.nombre && (
              <div class="alert alert-danger" role="alert" style={{ display: errors.nombre.message ? 'block' : 'none' }}>
                {errors.nombre.message}
              </div>
            )}
          </div>
          <div>
            <input className="input"
              {...register('email', { required: "El Email es requerido" })}
              type="email"
              name="email"
              id="u"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              placeholder="Email"
              title="Ingresa un mail valido"
            />
            {errors && errors.email && (
              <div class="alert alert-danger" role="alert" style={{ display: errors.email.message ? 'block' : 'none' }}>
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="input-container-register">
            <input className="input"
              {...register('password', { required: "La contraseña es requerida" })}
              type={showPassword ? 'text' : 'password'}
              name="password"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              placeholder="Contraseña"
              title="La contraseña debe tener al menos 8 caracteres y contener al menos una letra y un número"
            />
            <button className="show-hide" type="button" onClick={setHidePassword}>
              {showPassword ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
            </button>
            {errors && errors.password && (
              <div class="alert alert-danger" role="alert" style={{ display: errors.password.message ? 'block' : 'none' }}>
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="input-container-register">
            <input className="input"
              {...register('passwordConfirmation', { required: "Debe confirmar su contraseña" })}
              type={showPasswordConfirm ? 'text' : 'password'}
              name="passwordConfirmation"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
              placeholder="Confirmar contraseña"
              title="La contraseña debe tener al menos 8 caracteres y contener al menos una letra y un número"
            />
            <button className="show-hide" type="button" onClick={setHidePasswordConfirm}>
              {showPasswordConfirm ? <i class="bi bi-eye-slash-fill"></i> : <i class="bi bi-eye-fill"></i>}
            </button>
            {errors && errors.passwordConfirmation && (
              <div class="alert alert-danger" role="alert" style={{ display: errors.passwordConfirmation.message ? 'block' : 'none' }}>
                {errors.passwordConfirmation.message}
              </div>
            )}
          </div>
        </div>
        <div>
          <button className="botones" type="submit">Crear cuenta</button>
        </div>
      </form>
    </div>
  );
};

export default RegistroForm;