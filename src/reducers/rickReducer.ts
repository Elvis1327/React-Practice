import { TYPES } from "../TYPES/TYPES";

export const initialState = {
    data: []
}

export const rickReducer = (state = initialState, action: any) => {
    switch(action.type){
        case TYPES.RickData:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

