import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!loading && !isAuthenticated) return <Navigate to="login" />;

  return <Outlet />;
}

export default ProtectedRoutes;
