import { createContext, useState, useContext } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import { useEffect } from "react";
import Cookies from "js-cookie";

export type UserSignup = {
  username: string;
  email: string;
  password: string;
};

export type UserSignin = {
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  signup: (user: UserSignup) => void;
  signin: (user: UserSignin) => void;
  user: UserSignup | null;
  isAuthenticated: boolean;
  loading: boolean;
  errors: any | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        return setLoading(false);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
          return setLoading(false);
        }

        setUser(res.data);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  const signup = async (user: UserSignup) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data.message);
    }
  };

  const signin = async (user: UserSignin) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error);
      if (Array.isArray(error.response.data.message)) {
        return setErrors(error.response.data.message);
      }
      setErrors([error.response.data.message]);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signup, signin, user, isAuthenticated, loading, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
