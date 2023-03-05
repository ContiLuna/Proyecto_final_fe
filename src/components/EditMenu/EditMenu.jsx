import React, { useContext, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { actualizarMenu } from '../../context/UserActions';
import UserContext from '../../context/UserContext';
import { MENU_EDIT_SCHEMA } from '../../utils/formValidations';
import "./editMenu.css"


const EditMenu = ({menu, setShowModal}) => {
    const { state, dispatch } = useContext(UserContext);
    const  { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(MENU_EDIT_SCHEMA)
    });
    const onSubmit = (data) => {
        actualizarMenu(menu._id, data, dispatch, setShowModal)
        reset()
    }

    useEffect(() => {
        reset({
            nombre: menu?.nombre,
            precio: menu?.precio,
            detalle: menu?.detalle,
            categoria: menu?.categoria,
            estado: menu?.estado
        })
    }, [])
    

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input {...register("nombre")} type="text" name="nombre" defaultValue="" />
        </div>
        <div>
            <label htmlFor="precio">Precio</label>
            <input {...register("precio")} type="number" name="precio" defaultValue="" />
        </div>
        <div>
            <label htmlFor="detalle">Detalle</label>
            <input {...register("detalle")} type="text" name="detalle" defaultValue=""/>
        </div>
        <div>
            <label htmlFor="categoria">Categoria</label>
            <select {...register("categoria")} name="categoria" defaultValue="" >
                {
                    state.categorias.map((categoria) => {
                        return <option key={categoria._id} value={categoria.nombre}>{categoria.nombre}</option>
                    })
                }
            </select>
        </div>
        <div>
            <label htmlFor="estado">Estado</label>
           <select {...register("estado")} name="estado" defaultValue="">
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
           </select>
        </div>

        <div>
            <button type="submit">Actualizar</button>
        </div>

    </form>
  )
}

export default EditMenu