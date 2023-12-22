import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
} from "../api/task";

type TaskProviderProps = {
  children: React.ReactNode;
};

type TaskContextType = {
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  getTasks: () => void;
  getTask: (id: string) => void;
};

export type Task = {
  _id?: string;
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

  const getTask = async (id: string) => {
    const res = await getTaskRequest(id);
    console.log(res);
  };

  const createTask = async (task: Task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  const deleteTask = async (id: string) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log(res);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, getTasks, getTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
