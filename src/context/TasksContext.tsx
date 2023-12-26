import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  getTasksRequest,
  getTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "../api/task";
import { toast } from "react-hot-toast";

type TaskProviderProps = {
  children: React.ReactNode;
};

type TaskContextType = {
  tasks: Task[];
  taskToEdit: string;
  taskModal: boolean;
  loader: boolean;
  createTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, task: Task) => void;
  getTasks: () => void;
  getTask: (id: string) => Promise<Task>;
  openTaskModal: (id?: string) => void;
  closeTaskModal: () => void;
};

export type Task = {
  _id?: string;
  title?: string;
  description?: string;
  date: Date;
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
  const [taskModal, setTaskModal] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const orderTasks = (tasksArray: Task[]) => {
    const orderedArray = tasksArray.sort(
      (a: Task, b: Task) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return orderedArray;
  };

  const getTasks = async () => {
    setLoader(true);
    try {
      const res = await getTasksRequest();
      const orderedTasks = orderTasks(res.data);
      setTasks(orderedTasks);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  const getTask = async (id: string) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task: Task) => {
    setLoader(true);
    const res = await createTaskRequest(task);
    if (res.status === 200) {
      const orderedTasks = orderTasks([...tasks, res.data]);
      setTasks(orderedTasks);
    }
    toast.success("Task created successfully");
    setLoader(false);
    console.log(res);
  };

  const updateTask = async (id: string, task: Task) => {
    setLoader(true);
    try {
      const res = await updateTaskRequest(id, task);
      if (res.status === 200) {
        setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
        setTasks((oldTasks) => orderTasks(oldTasks));
      }
      toast.success("Task updated successfully");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  const deleteTask = async (id: string) => {
    setLoader(true);
    try {
      const res = await deleteTaskRequest(id);
      console.log(res);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
    setLoader(false);
  };

  const openTaskModal = (id?: string) => {
    if (id) setTaskToEdit(id);
    setTaskModal(true);
  };

  const closeTaskModal = () => {
    setTaskModal(false);
    setTaskToEdit("");
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskModal,
        taskToEdit,
        loader,
        createTask,
        getTasks,
        getTask,
        updateTask,
        deleteTask,
        openTaskModal,
        closeTaskModal,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
