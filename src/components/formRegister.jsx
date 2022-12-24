import React, { useRef, useState } from "react";
import { useForm } from 'react-hook-form'
import { axiosInstance } from "../config/InstanciAxios.js";
import "../Styles/FormRegister.css";
import "./registro"

const RegistroForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const enviarFormulario = async (data) => {
   try {
    const registro = await axiosInstance.post('/register', data);
    console.log(registro.data);
   } catch (error) {
    console.log(error.response.data)
   }
  };

  return (
    <div className="form">
      <form className="in-form" onSubmit={handleSubmit(enviarFormulario)}>
        <div className="input" >
        <h1 className="registrarse">Registrarse</h1>
          <div>
          <input className="input"
          {...register('nombre', {required: "el campo es requerido"})}
          type="text"
            name="nombre"
            id="nombre"
            placeholder ="Nombre"
          />
          {errors?.nombre?.message}
        </div>
        <div>
          <input className="input"
          {...register('email')}
            type="email"
            name="email"
            id="u"
            placeholder="Email"
            />
        </div>
        <div>
          <input className="input" 
          {...register('password')}
          type="password"
          name="password"
          placeholder="Contraseña"
          />
          </div>
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