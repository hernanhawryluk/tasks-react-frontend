import { Link } from "react-router-dom";

function NoAuthLinks() {
  return (
    <>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
    </>
  );
}

export default NoAuthLinks;
