import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const signIn = async (user) => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/users/signin`, user, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data; // Returning the data received from the server
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during sign up.");
    }
  }
};

export const signUp = async (userData) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/users/signup`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return data; // Returning the data received from the server
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during sign up.");
    }
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

export const signOut = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/users/signout`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return data; // Returning the data received from the server
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during sign out.");
    }
  }
};
