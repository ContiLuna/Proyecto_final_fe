import React, { useState, useContext, useEffect } from 'react'
import FormCreateClient from '../../components/FormCreateClient/FormCreateClient'
import ModalReact, { ModalBodyReact, ModalHeaderReact } from '../../components/Modal/ModalReact'
import TablaPedidos from '../../components/Tablas/TablaPedidos'
import TablaUsuarios from '../../components/Tablas/TablaUsuarios'
import { getAllPedidos, getAllProducts, getAllUsers } from '../../context/UserActions'
import UserContext from '../../context/UserContext'

const Usuarios = () => {
    const [showModal, setShowModal] = useState(false)
    const {state, dispatch} = useContext(UserContext);
console.log(state);
    useEffect(() => {
        dispatch(getAllUsers());
        dispatch(getAllProducts())
        getAllPedidos()
    }, [])
  return (
    <div>
        <div className='container__button__createMenu'>
            <button className='button__createMenu' onClick={() => setShowModal(!showModal)}>Crear Usuario</button>
        </div>
        <div>
        <TablaUsuarios />

        <TablaPedidos />
        </div>
        <ModalReact show={showModal} setShow={setShowModal}>
            <ModalHeaderReact>
                Crear Usuario
            </ModalHeaderReact>
            <ModalBodyReact>
                <FormCreateClient />
            </ModalBodyReact>
        </ModalReact>
    </div>
  )
}

export default Usuarios