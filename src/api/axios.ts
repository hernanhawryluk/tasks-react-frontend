import axios from "axios";

const API_URL = "tasks-nodejs-backend.vercel.app/api";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
