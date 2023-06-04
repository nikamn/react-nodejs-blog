import { axiosInstance } from ".";

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:3000/api/v1/users/register",
      payload
    );
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
};

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:3000/api/v1/users/login",
      payload
    );
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
};

export const GetUser = async () => {
  try {
    const response = await axiosInstance.get(
      "http://localhost:3000/api/v1/users/getuser"
    );
    return response.data;
  } catch (error) {
    throw error || error.response.data;
  }
};
