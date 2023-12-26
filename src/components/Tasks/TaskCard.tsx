import { useState } from "react";
import { Task, useTasks } from "../../context/TasksContext";
import { IoTrashSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import AlertDialog from "../AlertDialog";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }: { task: Task }) {
  const { openTaskModal, deleteTask } = useTasks();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDeleteTask = () => {
    typeof task._id === "string" && deleteTask(task._id);
  };

  return (
    <div className="flex flex-col justify-between bg-neutral-800 border-[1.5px] border-neutral-600 w-[90%] sm:w-[100%] lg:w-[47%] xl:w-[31%] 2xl:w-[23%] h-[240px] p-4 rounded-md ">
      <header>
        <h1 className="text-lg font-bold mb-2">{task.title}</h1>
        <div className="flex flex-col justify-between h-full">
          <p className="text-sm text-neutral-300">{task.description}</p>
          <p className="text-sm text-neutral-400">
            {task.date && dayjs(task.date).format("DD/MM/YYYY")}
          </p>
        </div>
      </header>
      <div className="flex justify-between items-center">
        <div
          className={`px-3 py-2 rounded-full font-semibold text-sm opacity-80
        ${task.completed ? "bg-green-600" : "bg-rose-700"} text-white`}
        >
          {task.date ? "Completed" : "Incomplete"}
        </div>
        <div className="flex gap-2">
          <button onClick={() => openTaskModal(task._id)}>
            <FaEdit size={24} />
          </button>
          <button
            onClick={() => {
              setOpenDialog(true);
            }}
          >
            <IoTrashSharp size={24} />
          </button>
        </div>
      </div>
      <AlertDialog
        openDialog={openDialog}
        title="Delete Task"
        description="Are you sure you want to delete this task?"
        confirmButtonText="Delete"
        onConfirm={handleDeleteTask}
        handleDialogClose={handleDialogClose}
      />
    </div>
  );
}

export default TaskCard;
