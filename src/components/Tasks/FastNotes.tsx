import { useEffect, useState } from "react";
import { useTasks } from "../../context/TasksContext";

function FastNotes() {
  const [value, setValue] = useState<string>("");
  const { notes, getNotes, saveNotes } = useTasks();

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    setValue(notes);
  }, [notes]);

  return (
    <div className="flex flex-col gap-4 mb-6 h-full">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Notes..."
        className="inputbox border border-neutral-500 min-h-[92px] h-full resize-none"
      />
      <button onClick={() => saveNotes(value)} className="button ">
        Save
      </button>
    </div>
  );
}

export default FastNotes;
