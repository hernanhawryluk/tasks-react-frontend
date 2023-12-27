import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AuthLinks() {
  const { logout } = useAuth();
  const location = useLocation();

  const boxes =
    "flex gap-2 items-center font-semibold text-neutral-400 hover:text-neutral-300 transition cursor-pointer";
  return (
    <>
      <li className={boxes}>
        <Link to={"/tasks"}>
          <IoHomeSharp
            size={22}
            color={location.pathname === "/tasks" ? "#fff" : "#666"}
          />
        </Link>
      </li>
      <li className={boxes}>
        <Link to={"/calendar"}>
          <FaCalendarAlt
            size={20}
            color={location.pathname === "/calendar" ? "#fff" : "#666"}
          />
        </Link>
      </li>
      <li onClick={() => logout()} className={boxes}>
        <FaSignOutAlt size={24} />
      </li>
    </>
  );
}

export default AuthLinks;
