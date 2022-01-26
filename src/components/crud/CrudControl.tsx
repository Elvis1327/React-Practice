import React, { useContext } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { CrudContext } from '../../context/CrudContext';

export const CrudControl = () => {
    
    const { state, deleteOneUserDispatch } = useContext(CrudContext);
    let navigate = useNavigate();
    const { loading, users } = state;

    if(loading === true){
        return <div className="_loading-page"></div>
    }
    return (
        <div className="_main-container-crud-manage">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((res: any)=> (
                        <tr key={res._id}>
                            <td>{res.nombre}</td>
                            <td>{res.email}</td>
                            <td>{res.sueldo}</td>
                            <td>
                                <button className="_edit-button" onClick={() => navigate(`/${res._id}`)}>
                                    <AiFillEdit />
                                    Edit
                                </button>
                                <button className="_delete-button" onClick={() => deleteOneUserDispatch(res._id)}>
                                    <AiFillDelete />
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
