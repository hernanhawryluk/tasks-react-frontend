import { useState } from "react";
import { Task, useTasks } from "../../context/TasksContext";
import { IoTrashSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import AlertDialog from "../AlertDialog";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useCalendar } from "../../context/CalendarContext";
dayjs.extend(utc);

function TaskCard({ task }: { task: Task }) {
  const { openTaskModal, deleteTask } = useTasks();
  const { handleChangeHighlightDay } = useCalendar();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDeleteTask = () => {
    typeof task._id === "string" && deleteTask(task._id);
  };

  const colorForDate = (date: Date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    switch (true) {
      case newDate.getTime() < now.getTime():
        return "border-pink-800";
      case newDate.getTime() === now.getTime():
        return "border-emerald-600";
      case newDate.getTime() > now.getTime():
        return "border-sky-600";
    }
  };

  const getRelativeDate = (date: Date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    switch (true) {
      case newDate.getTime() === yesterday.getTime():
        return "Yesterday";
      case newDate.getTime() === today.getTime():
        return "Today";
      case newDate.getTime() === tomorrow.getTime():
        return "Tomorrow";
      default:
        return dayjs(newDate).format("DD/MM/YYYY");
    }
  };

  return (
    <div className="bg-zinc-800 w-[100%] sm:w-[48%] lg:w-[48%] xl:w-[31.5%] h-[200px] p-[0.5px] rounded-xl bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 z-[1]">
      <div className="flex flex-col justify-between bg-gradient-to-r from-zinc-800 to-zinc-900 border-[1.5px] border-neutral-600 w-full h-full p-4 rounded-xl">
        <header>
          <h1 className="text-lg font-bold mb-2 single-line">{task.title}</h1>
          <p className="text-sm text-neutral-300 multi-line">
            {task.description}
          </p>
        </header>
        <div className="flex justify-between items-center">
          <div
            onClick={() => handleChangeHighlightDay(dayjs(task.date))}
            className={`rounded-full font-bold text-sm text-white flex justify-center items-center h-[32px] w-[110px] border-[2px] cursor-pointer
        ${task.date && colorForDate(task.date)}
        `}
          >
            {task.date && getRelativeDate(task.date)}
          </div>
          <div className="flex gap-1 xs:gap-2">
            <button
              onClick={() => openTaskModal(task.date, task._id)}
              className="cursor-pointer text-neutral-300 hover:text-neutral-100 transition hover:scale-110 active:scale-95"
            >
              <FaEdit size={24} />
            </button>
            <button
              onClick={() => {
                setOpenDialog(true);
              }}
              className="cursor-pointer text-neutral-300 hover:text-neutral-100 transition hover:scale-110 active:scale-95"
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
    </div>
  );
}

export default TaskCard;
