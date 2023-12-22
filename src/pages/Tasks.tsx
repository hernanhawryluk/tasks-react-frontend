import { useEffect } from "react";
import { Task, useTasks } from "../context/TasksContext";
import TaskCard from "../components/Tasks/TaskCard";

function Tasks() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <h1>No tasks</h1>;

  return (
    <div>
      {tasks.map((task: Task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}

export default Tasks;
