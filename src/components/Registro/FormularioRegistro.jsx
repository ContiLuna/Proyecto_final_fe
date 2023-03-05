import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/axiosInstance';
import { CREATE_USER_SCHEMA } from '../../utils/formValidations';
import NotificacionesApp from '../Notificaciones/NotificacionesApp';
import "./formularioRegistro.css"



const FormularioRegistro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(CREATE_USER_SCHEMA)
    });
    const navigate = useNavigate();

    const verificarUsuarioExistente = async (email) => {
        try {
          const respuesta = await axiosInstance.get(`/user/${email}`);
          return respuesta
        } catch (error) {
          console.log(error);
        }
      }

    const enviarFormulario = async (data) => {
        try {
          const registro = await axiosInstance.post('/register', data);
          console.log(registro.data);
          NotificacionesApp.success('Registro exitoso', 'Bienvenido a OkFood')
          navigate('/login')
        } catch (error) {
          console.log(error.response.data.mensaje)
          NotificacionesApp.error(error.response.data.mensaje)
        }
    }
  return (
    <div className='form__registro__container'>
        <div>
            <h2>Registro Clientes</h2>
        </div>
        <form onSubmit={handleSubmit(enviarFormulario)}>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input className='input__registro' type="text" name="nombre" id="nombre" {...register(
                    "nombre"
                )} />
                <span className='registro__errors'>{errors?.nombre?.message}</span>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input className='input__registro' type="email" name="email" id="email" {...register("email")} />
                <span className='registro__errors'>{errors?.email?.message}</span>
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input className='input__registro' type="password" name="password" id="password" {...register("password")} />
                <span className='registro__errors'>{errors?.password?.message}</span>
            </div>
            <div>
                <label htmlFor="password2">Confirmar Contraseña</label>
                <input className='input__registro' type="password" name="passwordConfirmation" id="passwordConfirmation" {...register("passwordConfirmation")} />
                <span className='registro__errors'>{errors?.passwordConfirmation?.message}</span>
            </div>
            <div >
                <button className='btn_registro'>Registrarse</button>
            </div>
        </form>
        {/* si ya tenes cuenta */}
        <div className='tenes_cuenta'>
            <p>¿Ya tenes cuenta?</p>
            <Link to='/login'>Ingresar</Link>
            </div>
    </div>
  )
}

export default FormularioRegistro