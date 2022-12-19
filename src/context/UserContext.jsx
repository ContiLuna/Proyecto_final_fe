import React, { createContext } from 'react'


export const initialState = {
    productos: [],
    users: [],
    isLogged: false
  }
  
  export const UserContext = createContext({
      state: initialState,
      dispatch: (action) => {}
  });




export default UserContext