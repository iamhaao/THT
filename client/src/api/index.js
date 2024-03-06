import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const signIn = async (user) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/users/signin`, user);
    return data; // Returning the data received from the server
  } catch (error) {
    console.error("Sign In Error:", error);
    throw new Error(error.message); // You might want to customize the error message
  }
};

export const signUp = async (userData) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/users/signup`, userData);

    return data; // Returning the data received from the server
  } catch (error) {
    console.error("Sign In Error:", error);
    throw new Error(error.message); // You might want to customize the error message
  }
};
export const validateToken = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/users/validate-token`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.error("Sign In Error:", error);
    throw new Error(error.message);
  }
};
