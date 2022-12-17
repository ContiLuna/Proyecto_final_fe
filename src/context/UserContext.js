import React, { createContext } from 'react';

//creamos un initialState, el cual tendra los estados iniciales de mi aplicacion
export const initialState = {
  menu: [],
}

export const UserContext = createContext({
    state: initialState,
    dispatch: (action) => {}
});