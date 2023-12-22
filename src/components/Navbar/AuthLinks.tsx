import { Link } from "react-router-dom";

function AuthLinks() {
  return (
    <>
      <li>
        <Link to={"/tasks"}>Tasks</Link>
      </li>
      <li>
        <Link to={"/tasks/new"}>Add Task</Link>
      </li>
      <li>
        <Link to={"/tasks"}>Important</Link>
      </li>
      <li>
        <Link to={"/tasks"}>Completed</Link>
      </li>
      <li>
        <Link to={"/tasks"}>Profile</Link>
      </li>
    </>
  );
}

export default AuthLinks;
