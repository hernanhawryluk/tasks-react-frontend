import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AuthLinks() {
  const { logout, user } = useAuth();

  return (
    <>
      <li>Welcome {user?.username}</li>
      <li>
        <Link to={"/tasks"}>Tasks</Link>
      </li>
      <li>
        <Link to={"/tasks/new"}>Add Task</Link>
      </li>
      <li>
        <Link to={"/profile"}>Profile</Link>
      </li>
      <li>
        <Link
          to={"/"}
          onClick={() => logout()}
          className="bg-indigo-500 px-4 py-1 rounded-sm"
        >
          Logout
        </Link>
      </li>
    </>
  );
}

export default AuthLinks;
