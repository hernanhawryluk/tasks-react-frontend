import axios from "axios";

type User = {
  username: string;
  email: string;
  password: string;
};

const API = "http://localhost:3000/api";

export const registerRequest = async (user: User) => {
  const res = await axios.post(`${API}/register`, user);
  return res;
};
