import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AuthLinks() {
  const { logout } = useAuth();
  const location = useLocation();

  return (
    <>
      <li
        className={`highlight
          ${
            location.pathname === "/tasks"
              ? "text-neutral-50"
              : "text-neutral-400"
          }`}
      >
        <Link to={"/tasks"}>Tasks</Link>
      </li>
      <li
        className={`highlight
          ${
            location.pathname === "/calendar"
              ? "text-neutral-50"
              : "text-neutral-400"
          }`}
      >
        <Link to={"/calendar"}>Calendar</Link>
      </li>
      <li
        onClick={() => logout()}
        className="text-neutral-400 cursor-pointer highlight"
      >
        Logout
      </li>
    </>
  );
}

export default AuthLinks;
