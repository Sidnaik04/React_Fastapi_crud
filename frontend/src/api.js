import axios from "axios";

// Use the environment variable for the production URL,
// with a fallback to localhost for development.
const API_URL = import.meta.env.REACT_APP_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
});

export default apiClient;
