import axios from "./axios";
import { Task } from "../context/TasksContext";

export const getTasksRequest = () => axios.get("/tasks");

export const getTaskRequest = (id: string) => axios.get(`/task/${id}`);

export const createTaskRequest = (task: Task) => axios.post("/tasks", task);

export const updateTaskRequest = (task: Task) =>
  axios.put(`/tasks/${task._id}`, task);

export const deleteTaskRequest = (id: string) => axios.delete(`/tasks/${id}`);
