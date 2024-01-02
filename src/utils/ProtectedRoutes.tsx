import { CircularProgress } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { loading, isAuthenticated } = useAuth();

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <CircularProgress size={80} />
      </div>
    );
  if (!loading && !isAuthenticated) return <Navigate to="login" />;

  return <Outlet />;
}

export default ProtectedRoutes;
