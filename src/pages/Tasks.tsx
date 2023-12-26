import { useEffect } from "react";
import { Task, useTasks } from "../context/TasksContext";
import TaskCard from "../components/Tasks/TaskCard";
import TaskAddCard from "../components/Tasks/TaskAddCard";
import Heading from "../components/Heading";
import PlusButton from "../components/Tasks/PlusButton";
import { Modal } from "@mui/material";
import TaskForm from "../components/NewTask/TaskForm";

function Tasks() {
  const { tasks, taskModal, closeTaskModal, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No tasks</h1>;

  return (
    <div className="bg-neutral-900 border-[1.5px] border-neutral-700 w-full rounded-xl px-8 py-8 overflow-scroll">
      <div className="flex justify-between mb-6">
        <Heading title="All Tasks" />
        <PlusButton />
      </div>
      <div className="flex flex-wrap gap-8">
        {tasks.map((task: Task) => (
          <TaskCard task={task} key={task._id} />
        ))}
        <TaskAddCard />
      </div>
      <Modal
        open={taskModal}
        onClose={closeTaskModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TaskForm />
      </Modal>
    </div>
  );
}

export default Tasks;
