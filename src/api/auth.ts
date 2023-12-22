import axios from "./axios";
import { UserSignin, UserSignup } from "../context/AuthContext";

export const registerRequest = async (user: UserSignup) => {
  const res = await axios.post("/register", user);
  return res;
};

export const loginRequest = async (user: UserSignin) => {
  const res = await axios.post("/login", user);
  return res;
};

export const verifyTokenRequest = (token: any) => {
  const res = axios.get("/verify-token", token);
  return res;
};
