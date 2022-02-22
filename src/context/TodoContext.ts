import { createContext } from 'react';

interface Props {
    todoAppState: any;
    createNewTask: any;
    deleteTask: any
}

export const TodoContext = createContext({} as Props);


