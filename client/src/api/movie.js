import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const fetchMoviesApi = async (
  category,
  time,
  language,
  rate,
  year,
  search,
  pageNumber
) => {
  console.log(category, time, language, rate, year, search, pageNumber);
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/movies?category=${category}&time=${time}&language=${language}&rate=${rate}&year=${year}&search=${search}&pageNumber=${pageNumber}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};

export const deleteMovieById = async (movieId) => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/movies/${movieId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};

export const getFavorite = async () => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/users/favorites`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};
export const deleteAllFavorite = async () => {
  try {
    const { data } = await axios.delete(`${API_BASE_URL}/users/favorites`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};
export const addFavorite = async (movieId) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/users/favorites/${movieId}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};
export const deleteFavorite = async (movieId) => {
  try {
    const { data } = await axios.delete(
      `${API_BASE_URL}/users/favorites/${movieId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};

export const getMovieById = async (movieId) => {
  try {
    const { data } = await axios.get(`${API_BASE_URL}/movies/${movieId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};

export const addReview = async (movieId, rateData) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/movies/${movieId}/reviews`,
      rateData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // If the server provides a specific error message, use it
      throw new Error(error.response.data.message);
    } else {
      // Otherwise, use a generic error message
      throw new Error("An error occurred during call api!");
    }
  }
};
