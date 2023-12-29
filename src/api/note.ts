import axios from "./axios";

export const getNotesRequest = () => axios.get("/notes");

export const updateNotesRequest = (notes: string) =>
  axios.put("/notes", { notes });
