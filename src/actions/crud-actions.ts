import { TYPES } from '../types/types';
import { getAllUsersFetch, createOneUserFetch, editOneUserFetch, deleteOneUserFetch } from '../helpers/crud-fetch';

// Get all users
const getAllUsers = (data: any) => {
    return {
        type: TYPES.getAllUsers,
        payload: data
    };
};
export const getAllUsersAction = () => {
    return async (dispatch: any) => {
        const resp = await getAllUsersFetch();
        dispatch(getAllUsers(resp));
    };
};

// Create one user
const createOneUser = (data: any) => {
    return {
        type: TYPES.createOneUser,
        payload: data
    }
};
export const createOneUserAction = (body:any) => {
    return async (dispatch: any) => {
        const resp = await createOneUserFetch(body);
        dispatch(createOneUser(resp));
    };
};
// Edit User
export const editOneUserAction = (body:any) => {
    return async (dispatch: any) => {
        const resp = await editOneUserFetch(body);
        dispatch({
            type: TYPES.editOneUser,
            payload: resp
        });
    };
};

// Delete one user
export const deleteOneUserAction = (id: string) => {
    return async (dispatch: any) => {
        const resp = await deleteOneUserFetch(id);
        dispatch({
            type: TYPES.deleteOneUser,
            payload: resp
        });
    };
};



