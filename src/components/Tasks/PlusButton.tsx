import { useTasks } from "../../context/TasksContext";

function PlusButton() {
  const { openTaskModal } = useTasks();

  return (
    <div
      onClick={() => openTaskModal()}
      className="flex items-center justify-center border-2 border-neutral-600 rounded-full h-12 w-12 text-bold text-3xl pb-1 cursor-pointer text-neutral-400 hover:text-neutral-300 hover:bg-neutral-800 hover:scale-110 active:scale-95 transition"
    >
      +
    </div>
  );
}

export default PlusButton;
