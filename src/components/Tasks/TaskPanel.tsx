import { useEffect } from "react";
import { Task, useTasks } from "../../context/TasksContext";
import TaskCard from "./TaskCard";
import TaskAddCard from "./TaskAddCard";
import Heading from "../Heading";
import PlusButton from "./PlusButton";

function TaskPanel() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex flex-col border-[1.5px] border-neutral-700 w-full rounded-xl px-6 sm:px-8 pt-5 pb-8 overflow-hidden relative">
      <div className="flex justify-between mb-6">
        <Heading title="Tasks" />
        <PlusButton />
      </div>
      <div className="flex flex-wrap gap-5">
        {tasks.map((task: Task) => (
          <TaskCard task={task} key={task._id} />
        ))}
        <TaskAddCard />
      </div>

      <div className="absolute inset-0 bg-neutral-950 opacity-50 rounded-xl z-0" />
    </div>
  );
}

export default TaskPanel;
