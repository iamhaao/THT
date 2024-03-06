import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const signIn = async (user) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/users/signin`, user);

    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
    }

    return data; // Returning the data received from the server
  } catch (error) {
    console.error("Sign In Error:", error);
    throw new Error("Failed to sign in"); // You might want to customize the error message
  }
};
