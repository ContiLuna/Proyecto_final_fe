import React, { useRef, useState } from "react";
import { useForm } from 'react-hook-form'
import { axiosInstance } from "../config/InstanciAxios.js";
import { } from "../styles/FormRegister.css";

const RegistroForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const enviarFormulario = async (data) => {
   try {
    const registro = await axiosInstance.post('/users/registro', data);
    console.log(registro.data);
   } catch (error) {
    console.log(error.response.data)
   }
  };

  return (
    <div className="form">
      <form className="in-form" onSubmit={handleSubmit(enviarFormulario)}>
        <div>
        <h1 className="registrarse">Registrarse</h1>
          <input className="color"
          {...register('name', {required: "el campo es requerido"})}
            type="text"
            name="name"
            placeholder ="Nombre"
          />
          {errors?.nombre?.message}
        </div>
        <div>
          <input
          {...register('username')}
            type="email"
            name="username"
            placeholder="Email"
          />
        </div>
        <div>
          <input
          {...register('password')}
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </div>
        <div>
          <button className="botones" type="submit">Crear cuenta</button>
        </div>
        <div>
            <button className="botones" type="">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default RegistroForm;