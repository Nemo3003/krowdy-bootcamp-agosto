import React from 'react';
import { AuthContext } from "./AuthContext"
import {Type as AuthType} from '../types/type'
import {AuthReducer} from './AuthReducer'


const INITIAL_STATE = {
    logged: false,
    user: null
};

const init = ()=>{
    const user:any = JSON.parse(localStorage.getItem('user'));
    return{
        logged: !!user,
        user,
    };
};

export const AuthProvider = ({children}: any)=>{
    const [authState, dispatch] = React.useReducer(AuthReducer, INITIAL_STATE, init);

    const login = (username = "") =>{
        const user = {
            id: "admin",
            username: username,
        };
        localStorage.setItem('user', JSON.stringify(user));

        dispatch({
            type: AuthType.login,
            payload: user,
        });
    };
    const logout = ()=>{
        dispatch({
            type: AuthType.logout,
        });
        localStorage.removeItem('user');
        
    };

    return(
        <AuthContext.Provider value={{
            ...authState,login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}