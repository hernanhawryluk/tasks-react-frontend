import axios from "axios";

const API_URL = "https://tasks-react-frontend.vercel.app//api";
// const API_URL = "http://localhost:3000/api";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
