import axios from "axios";

const url = "http://localhost:8000";

export const subscribeUser = async (email) => {
  try {
    const response = await axios.post(`${url}/subscribe`, email);
    return response;
  } catch (error) {
    throw error.response;
  }
};
