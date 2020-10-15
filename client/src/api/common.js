import axios from 'axios';

export const getUsers = async() => {
  try {
    const { data } = await axios.get('http://localhost:2000/users');
    return data;
  } catch (error) { return error; }
};

export const createUser = async(user) => {
  try {
    const { data } = await axios.post('http://localhost:2000/users', user);
    return data;
  } catch (error) { return error; }
};

export const deleteUser = async(id) => {
  try {
    const { data } = await axios.post(`http://localhost:2000/users/${id}`);
    return data;
  } catch (error) { return error; }
};

export const updateUser = async(user) => {
  try {
    const { data } = await axios.post(`http://localhost:2000/users/${user.id}`, user);
    return data;
  } catch (error) { return error; }
};