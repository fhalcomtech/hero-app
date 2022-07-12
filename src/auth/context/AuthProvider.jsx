import React, {useReducer} from 'react';
import {AuthContext} from "./AuthContext";
import {authTypes} from "../types/types";
import {authReducer} from "./authReducer";
const initialState = () => {
    return  ({})
}
const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer,{},initialState)
    const login = (username='', password='') =>
    {
        const action = {
            type: authTypes.login,
            payload: {
                username,
                password,
                id:123456789
            }
        }
        dispatch(action);
    }
    return (
        <AuthContext.Provider value={{authState, login}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
