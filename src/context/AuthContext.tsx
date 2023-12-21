import { createContext, useState, useContext } from "react";
import { registerRequest } from "../api/auth";

type User = {
  username: string;
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  signup: (user: User) => void;
  user: User | null;
  isAuthenticated: boolean;
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
  const [errors, setErrors] = useState<unknown>([]);

  const signup = async (user: User) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, user, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
