import { useEffect } from "react";
import { Task, useTasks } from "../../context/TasksContext";
import TaskCard from "./TaskCard";
import TaskAddCard from "./TaskAddCard";
import Heading from "../Heading";
import PlusButton from "./PlusButton";
import { Modal } from "@mui/material";
import TaskForm from "../NewTask/TaskForm";

function TaskPanel() {
  const { tasks, taskModal, closeTaskModal, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex flex-col border-[1.5px] border-neutral-700 w-full rounded-xl px-8 py-5 overflow-hidden relative">
      <div className="flex justify-between mb-6">
        <Heading title="Tasks" />
        <PlusButton />
      </div>
      <div className="flex flex-wrap gap-8">
        {tasks.map((task: Task) => (
          <TaskCard task={task} key={task._id} />
        ))}
        {tasks.length === 0 && <TaskAddCard />}
      </div>
      <Modal
        open={taskModal}
        onClose={closeTaskModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TaskForm />
      </Modal>
      <div className="absolute inset-0 bg-neutral-950 opacity-50 rounded-xl z-0" />
    </div>
  );
}

export default TaskPanel;
