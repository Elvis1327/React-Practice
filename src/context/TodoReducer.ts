import { Types } from '../types/types';

export const initialState = {
    tasks: [
        {
            id: Date.now(),
            task: 'watch the dog',
            done: false
        }
    ]
};

export const todoReducer = (state = initialState, action: any) => {
    switch(action.type){
        case Types.createNewTask:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case Types.DeleteTask:
            return {
                ...state,
                tasks: state.tasks.filter((res: any) => res.id !== action.payload )
            };
        case Types.editTast:
            return {
                ...state,
                tasks: state.tasks.map((res: any) => {
                    if(res.id === action.payload){
                        return {...res, done: !res.done}
                    };
                    return res;
                })
            }
        default: return state;
    }
}

