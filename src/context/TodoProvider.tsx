import React, { useReducer} from 'react';
import Swal from 'sweetalert2';

import { TodoContext } from '../context/TodoContext';
import { initialState, todoReducer } from './TodoReducer';
import { Types } from '../types/types';

interface Props {
  children: JSX.Element;
}

export const TodoProvider = ({children}: Props) => {

  const [ todoAppState, dispatch ] = useReducer(todoReducer, initialState);
  // Create a new task
  const createNewTask = (task: any) => {
    const todo = {
      type: Types.createNewTask,
      payload: {
        id: Date.now(),
        task: task,
        done: false
      }
    };
    dispatch(todo);
  };
  // Delete a task
  const deleteTask = async (id: any) => {

    const action = {
      type: Types.DeleteTask,
      payload: id
    };
    const resp = await Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if(resp.isConfirmed){
      dispatch(action);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
    };
  };
  // Edit a task
  const editTask = (task: any) => {
    const action = {
      type: Types.editTast,
      payload: task
    };
    dispatch(action);
  }

  return (
    <TodoContext.Provider value={{
        createNewTask,
        todoAppState,
        deleteTask,
        editTask
    }}>
      {children}
    </TodoContext.Provider>
  )
}
