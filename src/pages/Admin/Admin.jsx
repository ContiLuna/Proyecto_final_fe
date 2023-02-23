import React, { useContext, useEffect, useState } from 'react'
import { getAllCategorias, getAllPedidos, getAllProducts, getAllUsers } from '../../context/UserActions';
import UserContext from '../../context/UserContext';
import Usuarios from './Usuarios'


const Admin = () => {
    const { state, dispatch } = useContext(UserContext);
    const [usuarios, setUsuarios] = useState(state?.users);
    useEffect(() => {
      dispatch(getAllUsers());
      dispatch(getAllProducts());
      dispatch(getAllPedidos());
      dispatch(getAllCategorias());
    }, []);
  return (
    <div>
        <Usuarios usuarios={usuarios} />
    </div>
  )
}

export default Admin