import React, { useReducer, useState, useEffect } from 'react';
import { UserContext, initialState } from "./UserContext"
import { UserReducer } from "./UserReducer"


const UserStore = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    const [connected, setConnected] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080")
            .then((response) => {
                if (!response.ok) {
                    setConnected(false);
                }
            })
            .catch((error) => {
                setConnected(false);
            });
    }, []);

    const dispatchWrapper = (actionPromise) => {
        actionPromise.then(response => {
            dispatch(response)
        })
    }

    const dispatchSelector = (action) => {
        if (action.then) {
            dispatchWrapper(action)
        } else {
            dispatch(action)
        }
    }

    return (
        <UserContext.Provider value={{ state, dispatch: dispatchSelector, connected }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserStore;