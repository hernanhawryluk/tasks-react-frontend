import { Link } from "react-router-dom";
import { Task, useTasks } from "../../context/TasksContext";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }: { task: Task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md m-5">
      <header>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p className="text-slate-300">{task.description}</p>
        <p>{task.date && dayjs(task.date).format("DD/MM/YYYY")}</p>
      </header>
      <div className="flex justify-between">
        <Link to={`/tasks/${task._id}`}>Edit</Link>
        <button
          onClick={() => {
            typeof task._id === "string" && deleteTask(task._id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
