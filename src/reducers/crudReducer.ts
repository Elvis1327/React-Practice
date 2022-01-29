import { TYPES } from '../types/types';

const initialValues = {
    users: [],
    loading: true
};

export const crudReducer = (state = initialValues, action: any) => {
    switch(action.type){
        case TYPES.getAllUsers:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case TYPES.editOneUser:
            return {
                ...state,
                users: state.users.map((res:any) => res._id === action.payload._id ? action.payload : res )
            };
        case TYPES.deleteOneUser:
            return {
                ...state,
                users: state.users.filter((res:any) => res._id !== action.payload )
            };
        case TYPES.createOneUser:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default: return state; 
    }
}



