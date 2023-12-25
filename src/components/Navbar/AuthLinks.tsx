import { IoHomeSharp } from "react-icons/io5";
import { FaCheck, FaListCheck } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

function AuthLinks() {
  const boxes = `flex gap-3 items-center pl-10 h-12 w-full border-neutral-700 hover:bg-neutral-600 font-semibold`;
  return (
    <>
      <li className={boxes}>
        <IoHomeSharp size={18} />
        <Link to={"/tasks"}>All Tasks</Link>
      </li>
      {/* <li className={boxes}>
        <FaListCheck size={18} />
        <Link to={"/tasks/new"}>Add Task</Link>
      </li> */}
      <li className={boxes}>
        <FaListCheck size={18} />
        <Link to={"/tasks"}>Important</Link>
      </li>
      <li className={boxes}>
        <FaCheck size={18} />
        <Link to={"/tasks"}>Completed</Link>
      </li>
      <li className={boxes}>
        <RxAvatar size={21} />
        <Link to={"/tasks"} className="-ml-[2.5px]">
          Profile
        </Link>
      </li>
    </>
  );
}

export default AuthLinks;
