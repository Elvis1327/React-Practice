import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { InputControls } from './InputControls';
import { useForm } from '../../hooks/useForm';
import { CrudContext } from '../../context/index';

export const CrudCreate = () => {

    const { createOneUserDispatch, editOneUserDispatch, state } = useContext(CrudContext);

    const { id } = useParams();

    const { formValues, onChange, resetForm, setFormValues, initialValues } = useForm({
        _id: id ? id : '',
        nombre: '',
        email: '',
        sueldo: ''
    });
    const { nombre, email, sueldo, _id } = formValues;

    useEffect(() => {
        let usuario = state.users.find((res:any)=> res._id === id);
        if(id){
            setFormValues({
                _id: usuario._id || '',
                nombre: usuario.nombre,
                email: usuario.email,
                sueldo: usuario.email
            })
        }else{
            setFormValues(initialValues)
        }
    },[setFormValues, id, _id, nombre, email, sueldo])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(_id){
            editOneUserDispatch(formValues)
        }else{
            createOneUserDispatch(formValues);
        }
        resetForm();
    };

    return (
        <div className="_main-container-crud-form">
            <div className="form-container">
                <h1>
                    Crud Form
                </h1>
                <form className="_form-crud" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <InputControls 
                            type="text" 
                            placeholder='Introduce Your Name'
                            name='nombre'
                            className="_input-form"
                            label="Name"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
                    <div className="form-control">
                        <InputControls 
                            type="text" 
                            placeholder='Introduce your email'
                            name='email'
                            className="_input-form"
                            label="Email"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-control">
                        <InputControls 
                            type="text" 
                            placeholder='Introduce your check'
                            name='sueldo'
                            className="_input-form"
                            label="sueldo"
                            onChange={onChange}
                            value={sueldo}
                        />
                    </div>
                    <button
                        type='submit'
                        className="_form-button-submit"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

