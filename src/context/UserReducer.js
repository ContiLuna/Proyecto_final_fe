import {LOGIN_USER, GET_ALL_USERS, GET_ALL_PRODUCTS, GET_ALL_PEDIDOS, GET_ALL_CATEGORIAS} from "./types"

export const UserReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
        return {
            ...state,
            isLogged: action.payload
        }
      case GET_ALL_USERS:
        return {
            ...state,
            users: action.payload
        }
      case GET_ALL_PRODUCTS:
        return {
            ...state,
            productos: action.payload
        }
      case GET_ALL_PEDIDOS:
        return {
            ...state,
            pedidos: action.payload
        }
      case GET_ALL_CATEGORIAS:
        return {
            ...state,
            categorias: action.payload
        }
    default:
        return state;
  }
}
