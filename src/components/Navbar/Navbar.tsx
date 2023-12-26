import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLinks from "./AuthLinks";
import NoAuthLinks from "./NoAuthLinks";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="h-20 w-full bg-neutral-900 border-[1.5px] border-neutral-700 flex items-center justify-between rounded-lg px-8">
      <Link to={"/"}>
        <div className="text-2xl font-bold">Task Manager</div>
        <div className="h-1 w-[110px] bg-emerald-400 opacity-60 rounded-full"></div>
      </Link>
      <ul className="flex gap-10 font-semibold">
        {isAuthenticated ? <AuthLinks /> : <NoAuthLinks />}
      </ul>
    </nav>
  );
}

export default Navbar;
