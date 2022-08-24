import {Type as AuthLog} from '../types/type';

export const AuthReducer = (state:{}, action: any)=>{
    switch(action.type){
        case AuthLog.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case AuthLog.logout:
            return {
                ...state,
                logged: false,
                user: null
            }
        default:
            return state;
    }
}