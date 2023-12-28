import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLinks from "./AuthLinks";
import NoAuthLinks from "./NoAuthLinks";
import { SiTask } from "react-icons/si";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="h-[72px] w-full bg-neutral-900 border-b-[2px] border-neutral-700 flex items-center justify-between px-8 z-[1]">
      <Link to={"/"} className="z-[1] flex items-center gap-2">
        <SiTask size={26} />
        <div className="text-2xl font-bold">Task Manager</div>
      </Link>
      <ul className="flex gap-14 font-semibold z-[1]">
        {isAuthenticated ? <AuthLinks /> : <NoAuthLinks />}
      </ul>
    </nav>
  );
}

export default Navbar;
