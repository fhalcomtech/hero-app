import React, {useReducer} from 'react';
import {AuthContext} from "./AuthContext";
import {authTypes} from "../types/types";
import {authReducer} from "./authReducer";

const initialState = () => {

    const data = (localStorage.getItem('user'))
    return data?{logged: true, user: (JSON.parse(data))}:({logged: false, user: {}});
}
const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(authReducer, {}, initialState);

    const login = (username = '', password = '') => {
        const user = {
            username,
            password,
            id: (100000 + Math.round((100000*Math.random())))
        }
        const action = {
            type: authTypes.login,
            payload: user
        };

        localStorage.setItem("user",JSON.stringify(user))
        dispatch(action);
    }

    const logout = () =>
    {
        localStorage.removeItem('user');
        const action = {
            type: authTypes.logout,
            payload: {}
        };
        dispatch(action);
    }


return(<AuthContext.Provider value={{authState, login, logout}}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;
