import React, { useState } from 'react'
import FormCreateClient from '../../components/FormCreateClient/FormCreateClient'
import ModalReact, { ModalBodyReact, ModalHeaderReact } from '../../components/Modal/ModalReact'
import TablaPedidos from '../../components/Tablas/TablaPedidos'
import TablaUsuarios from '../../components/Tablas/TablaUsuarios'

const Usuarios = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div>
        <div>
            <button className='btn__crearUser' onClick={() => setShowModal(!showModal)}>Crear Usuario</button>
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