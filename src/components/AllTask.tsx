import React, { useContext } from 'react';

import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button } from './Button';
import { TodoContext } from '../context/TodoContext';

interface Props {
  task: any;
  id: string;
}

export const AllTask = ({task, id}: Props) => {

  const { deleteTask } = useContext(TodoContext);

  return (
    <div className="_todoapp-card-task">
      <span style={{color: '#fff'}}>
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
