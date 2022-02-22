import React, { useState, useContext } from 'react';

import { Input } from '../components/Input';
import { AllTask } from '../components/AllTask';
import { TodoContext } from '../context/TodoContext';
import { Button } from '../components/Button';

export const TodoApp = () => {

    const  { todoAppState, createNewTask }  = useContext(TodoContext);
    const { tasks } = todoAppState;

    const [ inputValue, setInputValue ] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        createNewTask(inputValue);
        setInputValue('')
    };

    return (
        <section className="main-container-todoapp">
            <h1 className='_todoapp-h1-task'>
                Manage all of your task
            </h1>
            <form className="_todoapp-form" onSubmit={handleSubmit}>
                <Input 
                    type='text'
                    placeHolder='Introduce a new Task'
                    onChange={(e: any) => setInputValue(e.target.value)}
                    value={inputValue}
                    className="_todoapp-input"
                />
                <Button
                    className='_todo-button-add-new'
                    type='submit'
                >
                    New Task
                </Button>
            </form>
            <div className="_todoapp-all-tasks">
                {tasks.length === 0
                    ?
                    <div className="alert alert-danger" role="alert">
                      There is not task please add some task.
                    </div>
                    :
                    <>
                    {tasks.map((task: any) => (
                        <AllTask key={task.id} {...task} />
                    ))}
                    </>
                }
            </div>
        </section>
    );
};


