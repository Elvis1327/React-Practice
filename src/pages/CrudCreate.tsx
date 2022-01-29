import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Button, InputText } from '../components/index';
import { useForm } from '../hooks/useForm';
import { createOneUserAction, editOneUserAction } from '../actions/crud-actions';

export const CrudCreate = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state:any) => state.crudReducer)
    const { id } = useParams();
    const navigate = useNavigate();

    const { formValues, onChange, setFormValues } = useForm({
        _id: id || '',
        nombre: '',
        email: '',
        sueldo:''
    });
    const { nombre, sueldo, email } = formValues;

    useEffect(() => {
        let user = users.find((res: any) => res._id === id);
        if(id){
            setFormValues({
                _id: id,
                nombre: user.nombre,
                email: user.email,
                sueldo: user.sueldo
            });
        }else{
            setFormValues(formValues)
        }
    },[]);
    
    const handleSubmit = (e:any) => {
        e.preventDefault();

        if(id){
            dispatch(editOneUserAction(formValues));
            toast.success('The user has been edited',{
                position: 'bottom-right'
            });
            navigate('/manage');
        }else{
            dispatch(createOneUserAction(formValues));
            navigate('/manage');
        }
    }

    return (
        <section className="_main-container-form-create">
            <div className="_form-container">
                <h1 className='_form-container-h1'>
                    {id ? 'Edit Form' : 'Submit Form'}
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="_form-controls">
                        <InputText 
                            label="Name"
                            className="_input-create-form"
                            name="nombre"
                            placeholder="Introduce your name"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="_form-controls">
                        <InputText 
                            label="Email"
                            className="_input-create-form"
                            name="email"
                            placeholder="Introduce your email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="_form-controls">
                        <InputText 
                            label="Salary"
                            className="_input-create-form"
                            name="sueldo"
                            placeholder="Introduce your salary"
                            value={sueldo}
                            onChange={onChange}
                        />
                    </div>
                    <Button className='_form-submit-button'>
                        {id ? 'Edit' : 'Submit'}
                    </Button>
                </form>
            </div>
            <Toaster />
        </section>
    )
};
