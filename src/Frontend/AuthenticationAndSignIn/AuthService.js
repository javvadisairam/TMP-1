// AuthService.js

import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
   console.log(response.data)
    return response.data; // Assuming your backend returns a token upon successful login
  } catch (error) {
    throw error;
  }
};
