import React, { useEffect } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Loading } from '../components';
import { deleteOneUserAction, getAllUsersAction } from '../actions/crud-actions';

export const CrudManage = () => {

    const dispatch = useDispatch();
    const { users, loading } = useSelector((state:any) => state.crudReducer);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllUsersAction());
    },[dispatch]);

    const deleteOneUserCrud = (id:string) => {
        dispatch(deleteOneUserAction(id));
    }

    if(loading === true){
        return <Loading />
    }
    
    return (
        <section className="_main-container-manage-crud">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((res:any) => (
                        <tr key={res._id}>
                            <td>{res.nombre}</td>
                            <td>{res.email}</td>
                            <td>{res.sueldo}</td>
                            <td className='_manage-buttons'>
                                <Button className='_button-edit-manage' onClick={() => navigate(`/${res._id}`)}>
                                    <AiFillEdit fontSize='20px' />
                                    Edit
                                </Button>
                                <Button className='_button-delete-manage' onClick={() => deleteOneUserCrud(res._id)}>
                                    <AiFillDelete fontSize='20px' />
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

