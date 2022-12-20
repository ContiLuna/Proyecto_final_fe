import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistroStyle.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegistroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviarFormulario = async (data) => {
    try {
      const registro = await axios.post("http://localhost:8080/api/v1/users/registro", data)
    console.log(registro.data)
    } catch (error) {
      console.log(error.response.data)
    }
  };

  return (
    <div className="container-form-registro bg-dark">
      <form
        onSubmit={handleSubmit(enviarFormulario)}
        className="formulario-registro"
      >
        <h2 className="create-account">Registrarse</h2>
        <div className="form-floating mb-3">
          <input
            {...register("name", {required: true, minLength: 5, maxLength: 10})}
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            {...register("username", {required: true, minLength: 10, maxLength: 32})}
            type="email"
            name="username"
            className="form-control"
            placeholder="Email"
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            {...register("password", {required: true, maxLength: 12})}
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
        <button type="submit" className="btn btn-success">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default RegistroForm;
