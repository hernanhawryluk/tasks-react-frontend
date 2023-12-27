import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLinks from "./AuthLinks";
import NoAuthLinks from "./NoAuthLinks";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="h-[72px] w-full bg-neutral-900 border-b-[2px] border-neutral-700 flex items-center justify-between px-8 z-[1]">
      <Link to={"/"} className="z-[1]">
        <div className="text-2xl font-bold">Task Manager</div>
        <div className="h-1 w-[110px] bg-emerald-400 opacity-60 rounded-full"></div>
      </Link>
      <ul className="flex gap-10 font-semibold z-[1]">
        {isAuthenticated ? <AuthLinks /> : <NoAuthLinks />}
      </ul>
    </nav>
  );
}

export default Navbar;
