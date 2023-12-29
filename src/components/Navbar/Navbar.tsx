import { useAuth } from "../../context/AuthContext";
import AuthLinks from "./AuthLinks";
import NoAuthLinks from "./NoAuthLinks";
import { SiTask } from "react-icons/si";
import { IoLogIn } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return (
    <nav className="h-[54px] sm:h-[72px] w-full bg-neutral-900 border-b-[2px] border-neutral-700 flex items-center justify-between px-4 sm:px-8 z-[1] 2xl:px-[15%]">
      <div className="z-[1] flex items-center gap-2 text-xl sm:text-[24px]">
        <SiTask />
        <div className="text-lg sm:text-2xl font-bold">Task Manager</div>
      </div>
      <ul className="hidden sm:flex gap-14 font-semibold z-[1]">
        {isAuthenticated ? <AuthLinks /> : <NoAuthLinks />}
      </ul>
      <Link
        to={location.pathname === "/login" ? "/register" : "/login"}
        className="flex items-center gap-1 mt-[1px] sm:hidden"
      >
        {location.pathname === "/login" ? "Register" : "Login"}
        <IoLogIn size={26} className="mt-[1.5px]" />
      </Link>
    </nav>
  );
}

export default Navbar;
