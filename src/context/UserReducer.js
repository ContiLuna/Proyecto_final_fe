import {LOGIN_USER} from "./types"

export const UserReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
        return {
            ...state,
            isLogged: action.payload
        }
    default:
        return state;
  }
}
