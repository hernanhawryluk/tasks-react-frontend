import { IoHomeSharp } from "react-icons/io5";
import { FaCheck, FaListCheck } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AuthLinks() {
  const { logout } = useAuth();
  const boxes =
    "flex gap-2 items-center font-semibold text-neutral-400 hover:text-neutral-300 transition cursor-pointer";
  return (
    <>
      <li className={boxes}>
        <IoHomeSharp size={18} />
        <Link to={"/tasks"}>All Tasks</Link>
      </li>
      <li className={boxes}>
        <FaListCheck size={18} />
        <Link to={"/tasks"}>Important</Link>
      </li>
      <li className={boxes}>
        <FaCheck size={18} />
        <Link to={"/tasks"}>Completed</Link>
      </li>
      <li onClick={() => logout()} className={boxes}>
        <FaSignOutAlt size={20} />
        Sign Out
      </li>
    </>
  );
}

export default AuthLinks;
