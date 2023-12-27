import { useState } from "react";

function FastNotes() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col gap-4 mb-8 h-full">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Notes..."
        className="inputbox border border-neutral-500 h-full resize-none"
      />
      <button type="submit" className="button ">
        Save
      </button>
    </div>
  );
}

export default FastNotes;
