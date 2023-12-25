import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLinks from "./AuthLinks";
import NoAuthLinks from "./NoAuthLinks";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="h-full w-[280px] bg-neutral-900 border-[1.5px] border-neutral-700 flex flex-col justify-between py-10 rounded-lg">
      <Link to={"/"} className="px-10">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <p className="text-slate-300 text-xs mt-4">{user?.username}</p>
      </Link>
      <ul className="flex flex-col pb-12">
        {isAuthenticated ? <AuthLinks /> : <NoAuthLinks />}
      </ul>
      <div
        onClick={() => logout()}
        className="flex items-center gap-2 font-medium text-lg px-10 text-neutral-400 hover:text-neutral-300 transition cursor-pointer"
      >
        <FaSignOutAlt size={20} />
        Sign Out
      </div>
    </nav>
  );
}

export default Navbar;
