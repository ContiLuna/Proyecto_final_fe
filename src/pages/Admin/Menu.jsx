import React, { useContext, useState } from 'react';
import "./admin.css"
import FormProducto from '../../components/FormProduct/FormProduct'
import ModalReact, { ModalBodyReact, ModalHeaderReact } from '../../components/Modal/ModalReact'
import TablaMenu from '../../components/Tablas/TablaMenu'
import UserContext from '../../context/UserContext';
import { getAllPedidos } from '../../context/UserActions';

const Menu = () => {
    const [showModal, setShowModal] = useState(false)
    const {state, dispatch} = useContext(UserContext);

    useEffect(() => {
        dispatch(getAllPedidos())
    }, [])
    
  return (
    <>
    <div style={{height: "calc(90vh - 60px)"}}>
        <div className='container__button__createMenu'>
            <button className='button__createMenu' onClick={() => setShowModal(!showModal)}>Crear Menu</button>
        </div>
        <div>
            <TablaMenu />
        </div>
    </div>
    <ModalReact show={showModal} setShow={setShowModal}>
            {/* <ModalHeaderReact>
                Crear Menu
            </ModalHeaderReact> */}
            <ModalBodyReact>
                {/* <FormCreateClient /> */}
                <FormProducto />
            </ModalBodyReact>
        </ModalReact>
    </>
  )
}

export default Menu