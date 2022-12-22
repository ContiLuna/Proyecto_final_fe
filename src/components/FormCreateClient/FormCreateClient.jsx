import React from 'react';
import { useForm } from 'react-hook-form';
import "./formStyles.css";
import { yupResolver } from "@hookform/resolvers/yup"
import { CREATE_USER_SCHEMA } from '../../utils/formValidations';

const FormCreateClient = () => {
    const  { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(CREATE_USER_SCHEMA)
    });
    const onSubmit = (data) => {
        console.log(data)
        reset()
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form__container'>
    <div className='form__group'>
        <label>Nombre</label>
        <input {...register("nombre")} type="text" name='nombre' />
        <span>{errors?.nombre?.message}</span>
    </div>
    <div className='form__group'>
        <label>Email</label>
        <input {...register("email")} type="text" name='email' />
        <span>{errors?.email?.message}</span>
    </div>
    <div className='form__group'>
        <label>Contraseña</label>
        <input {...register("password")} type="password" name='password' />
        <span>{errors?.password?.message}</span>
    </div>
    <div className='form__group'>
        <label>Rol</label>
        <select {...register("rol")} name="rol">
            <option value="">-Seleccionar uno-</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
        </select>
        <span>{errors?.rol?.message}</span>
    </div>
    <div className='form__group'>
        <button>Crear Usuario</button>
    </div>
</form>
  )
}

export default FormCreateClient