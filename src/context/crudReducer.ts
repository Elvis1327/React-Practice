import { TYPES } from '../types/TYPES';

export const initialValue = {
    users: [],
    loading: true
};

export const crudReducer = (state = initialValue, action: any ) => {
    switch(action.type){
        case TYPES.getAllUsers:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case TYPES.createOneUser:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case TYPES.editOneUser:
            return {
                ...state,
                users: state.users.map((res: any)=> {
                    if(res._id === action.payload._id){
                        return action.payload
                    }
                    return res;
                })
            };
        case TYPES.deleteOneUser:
            return {
                ...state,
                users: state.users.filter((res: any) => res._id !== action.payload)
            }
        default: return state;
    }
}
