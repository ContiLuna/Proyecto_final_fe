import React, { createContext } from 'react'


export const initialState = {
    productos: [],
    users: [],
    isLogged: false,
    pedidos: [],
    categorias: [],
  }
  
  export const UserContext = createContext({
      state: initialState,
      dispatch: (action) => {}
  });




export default UserContext