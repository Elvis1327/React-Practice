import React, { useContext } from 'react';

import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button } from './Button';
import { TodoContext } from '../context/TodoContext';

interface Props {
  task: any;
  id: string;
  done: any;
}

export const AllTask = ({task, id, done}: Props) => {

  const { deleteTask, editTask } = useContext(TodoContext);

  return (
    <div className="_todoapp-card-task">
      <span 
        className={done === false ? '_todoapp-task-text' : '_todoapp-task-text true'}
        onClick={() => {editTask(id)}}  
      >
        {task}
      </span>
      <div className="_todoapp-buttons-delete-edit">
        <Button  
            className='_todoapp-delete-task'
            type='button'
            onClick={() => deleteTask(id)}
        >
          <RiDeleteBin6Line />
        </Button>
      </div>
    </div>
  )
}
