import { createContext, useContext, useState } from "react";
import { getNotesRequest, updateNotesRequest } from "../api/note";
import { toast } from "react-hot-toast";

type NotesProviderProps = {
  children: React.ReactNode;
};

type NotesContextType = {
  notes: string;
  loader: boolean;
  getNotes: () => void;
  saveNotes: (notes: string) => void;
};

const NotesContext = createContext<NotesContextType | null>(null);

export const useNotes = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const getNotes = async () => {
    try {
      const res = await getNotesRequest();
      setNotes(res.data.notes);
    } catch (error) {
      console.log(error);
    }
  };

  const saveNotes = async (notes: string) => {
    setLoader(true);
    try {
      const res = await updateNotesRequest(notes);
      if (res.status === 200) {
        toast.success("Notes saved successfully");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
    setLoader(false);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        loader,
        getNotes,
        saveNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
