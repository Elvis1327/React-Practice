import React, { useReducer, useEffect } from 'react';

import { getAllUsers, editOneUser, createOneUser, deleteOneUser } from '../helpers/crud-fetch'; 
import { crudReducer, initialValue, CrudContext } from './index';
import { TYPES } from '../types/TYPES';

interface Props {
    children: React.ReactNode;
};

export const CrudProvider = ({children}: Props) => {

    const [ state, dispatch ] = useReducer(crudReducer, initialValue);

    useEffect(() => {
        getAllUsers().then(res => {
            dispatch({
                type: TYPES.getAllUsers,
                payload: res
            });
        });
    },[]);

    // Create one user
    const createOneUserDispatch = async (body: any) => {
        const resp = await createOneUser(body);
        dispatch({
            type: TYPES.createOneUser,
            payload: resp
        });
    };

    // Edit one user
    const editOneUserDispatch = async (user: any) => {
        const resp = await editOneUser(user);
        dispatch({
            type: TYPES.editOneUser,
            payload: resp
        });
    };

    // Delete one User
    const deleteOneUserDispatch = async (id:string) => {
        const resp = await deleteOneUser(id);
        dispatch({
            type: TYPES.deleteOneUser,
            payload: resp
        })
    }


    return (
        <CrudContext.Provider value={{
            state,
            createOneUserDispatch,
            editOneUserDispatch,
            deleteOneUserDispatch
        }}>
            {children}
        </CrudContext.Provider>
    );
};