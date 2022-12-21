import React, { useReducer } from 'react';
import { UserContext, initialState } from "./UserContext"
import { UserReducer } from "./UserReducer"


const UserStore = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const dispatchWrapper = (actionPromise) => {
        actionPromise.then(response => {
            dispatch(response)
        })
    }

    const dispatchSelector = (action) => {
        if(action.then) {
            dispatchWrapper(action)
        } else {
            dispatch(action)
        }
    }

 return (
    <UserContext.Provider value={{ state, dispatch: dispatchSelector }}>
        {children}
    </UserContext.Provider>
 )
}

export default UserStore;