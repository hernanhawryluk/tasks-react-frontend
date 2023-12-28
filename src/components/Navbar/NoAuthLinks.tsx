import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NoAuthLinks() {
  const location = useLocation();

  return (
    <>
      <li
        className={`highlight
          ${
            location.pathname === "/login"
              ? "text-neutral-50"
              : "text-neutral-400"
          }`}
      >
        <Link to={"/login"}>Login</Link>
      </li>
      <li
        className={`highlight
          ${
            location.pathname === "/register"
              ? "text-neutral-50"
              : "text-neutral-400"
          }`}
      >
        <Link to={"/register"}>Register</Link>
      </li>
    </>
  );
}

export default NoAuthLinks;
