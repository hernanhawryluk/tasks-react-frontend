import axios from "./axios";
import { Task } from "../context/TasksContext";

export const getTasksRequest = () => axios.get("/tasks");

export const getTaskRequest = (id: string) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task: Task) => axios.post("/tasks", task);

export const updateTaskRequest = (id: string, task: Task) =>
  axios.put(`/tasks/${id}`, task);

export const deleteTaskRequest = (id: string) => axios.delete(`/tasks/${id}`);
