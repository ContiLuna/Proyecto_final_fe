import React from "react";
import { useForm } from "react-hook-form";
import "./formStyles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USER_SCHEMA } from "../../utils/formValidations";
import { axiosInstance } from "../../config/axiosInstance";
import NotificacionesApp from "../Notificaciones/NotificacionesApp";

const FormCreateClient = ({setShow}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CREATE_USER_SCHEMA),
  });

  const verificarUsuarioExistente = async (email) => {
    try {
      const respuesta = await axiosInstance.get(`/user/${email}`);
      return respuesta
    } catch (error) {
      console.log(error);
    }
  }


  const onSubmit = async (data) => {
    if (data.password !== data.passwordConfirmation) {
        NotificacionesApp.warning("Las contraseñas no coinciden");
        return;
      }
  
      const usuarioExiste = await verificarUsuarioExistente(data.email);
      if (usuarioExiste) {
        NotificacionesApp.warning("El usuario ya existe");
        return;
      }
  
      try {
        const registro = await axiosInstance.post('/register', data);
        console.log(registro.data);
        NotificacionesApp.success("Usuario creado con exito");
        setShow(false)
        reset();
      } catch (error) {
        console.log(error.response.data)
        NotificacionesApp.error("Error al crear el usuario");
      }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form__container">
      <div className="form__group">
        <label>Nombre</label>
        <input {...register("nombre")} type="text" name="nombre" />
        <span>{errors?.nombre?.message}</span>
      </div>
      <div className="form__group">
        <label>Email</label>
        <input {...register("email")} type="text" name="email" />
        <span>{errors?.email?.message}</span>
      </div>
      <div className="form__group">
        <label>Contraseña</label>
        <input {...register("password")} type="password" name="password" />
        <span>{errors?.password?.message}</span>
      </div>
      <div className="form__group">
        <label>Confirmar Contraseña</label>
        <input {...register("passwordConfirmation")} type="password" name="passwordConfirmation" />
        <span>{errors?.passwordConfirmation?.message}</span>
      </div>
      <div className="form__group">
        <label>Rol</label>
        <select {...register("rol")} name="rol">
          <option value="">-Seleccionar uno-</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
        <span>{errors?.rol?.message}</span>
      </div>
      <div className="form__group">
        <button type="submit">Crear Usuario</button>
      </div>
    </form>
  );
};

export default FormCreateClient;
