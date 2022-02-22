import { Types } from '../types/types';

export const initialState = {
    tasks: [
        {
            id: Date.now(),
            task: 'watch the dog',
            done: false
        }
    ]
}

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
            }
        default: return state;
    }
}

