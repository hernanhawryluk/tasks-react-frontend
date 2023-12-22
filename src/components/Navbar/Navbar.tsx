import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLinks from "./AuthLinks";
import NoAuthLinks from "./NoAuthLinks";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="h-[90%] bg-zinc-700 my-3 flex flex-col justify-between gap-4 w-[280px] py-5 px-10 rounded-lg">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <p className="text-slate-300 text-xs mt-4">{user?.username}</p>
      </Link>
      <ul className="flex flex-col gap-4">
        {isAuthenticated ? <AuthLinks /> : <NoAuthLinks />}
      </ul>
      <div onClick={() => logout()}>Sign Out</div>
    </nav>
  );
}

export default Navbar;
