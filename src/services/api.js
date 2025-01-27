import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(
      `${API_URL}/users?_page=${page}&_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/users/${id}`);
    return id;
  } catch (error) {
    throw error;
  }
};
