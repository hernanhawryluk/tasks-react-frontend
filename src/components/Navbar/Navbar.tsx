import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLinks from "./AuthLinks";
import NoAuthLinks from "./NoAuthLinks";

function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </Link>
      <ul className="flex gap-2">
        {isAuthenticated ? <AuthLinks /> : <NoAuthLinks />}
      </ul>
    </nav>
  );
}

export default Navbar;
