import axios from 'axios';

const mainUrl: string = 'https://crud-practice13.herokuapp.com';

// Get all users
export const getAllUsers = async () => {
    const { data } = await axios.get(`${mainUrl}/api/get-all`);
    return data.users;
};

// Create one user
export const createOneUser = async (body: any) => {
    const { data } = await axios.post(`${mainUrl}/api/create-user`, body);
    return data.usuario;
}

// Edit one user
export const editOneUser = async (user: any) => {
    const { data } = await axios.put(`${mainUrl}/api/edit-user/${user._id}`, user);
    return data.user;
};

// Delete one user 
export const deleteOneUser = async (id: string) => {
    const { data } = await axios.delete(`${mainUrl}/api/delete-user/${id}`);
    return data.id;
}




