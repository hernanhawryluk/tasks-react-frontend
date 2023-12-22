import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../api/task";

type TaskProviderProps = {
  children: React.ReactNode;
};

type TaskContextType = {
  tasks: Task[];
  createTask: (task: Task) => void;
  getTasks: () => void;
};

export type Task = {
  id?: string;
  title?: string;
  description?: string;
  date?: Date;
  completed?: boolean;
  important?: boolean;
  updatedAt?: Date;
  createdAt?: Date;
};

const TaskContext = createContext<TaskContextType | null>(null);

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[] | []>([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task: Task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, getTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
