import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// User APIs
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};

export const setAvatar = async (userId, imageData) => {
  const response = await axios.post(`${API_URL}/users/setAvatar/${userId}`, { image: imageData });
  return response.data;
};

// Transaction APIs
export const addTransaction = async (transactionData) => {
  const response = await axios.post(`${API_URL}/transactions/addTransaction`, transactionData);
  return response.data;
};

export const getAllTransactions = async (userId, filters) => {
  const response = await axios.post(`${API_URL}/transactions/getTransaction`, { userId, ...filters });
  return response.data;
};

export const deleteTransaction = async (transactionId, userId) => {
  const response = await axios.post(`${API_URL}/transactions/deleteTransaction/${transactionId}`, { userId });
  return response.data;
};

export const updateTransaction = async (transactionId, updatedData) => {
  const response = await axios.put(`${API_URL}/transactions/updateTransaction/${transactionId}`, updatedData);
  return response.data;
};