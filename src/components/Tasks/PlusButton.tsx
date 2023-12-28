import { useTasks } from "../../context/TasksContext";

function PlusButton() {
  const { openTaskModal } = useTasks();

  return (
    <div className="rounded-full p-[1.1px] bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:scale-110 active:scale-95 text-neutral-400 hover:text-neutral-50 transition z-[1]">
      <div
        onClick={() => openTaskModal()}
        className="flex items-center justify-center border-[0.6px] border-neutral-600 bg-neutral-950 rounded-full h-12 w-12 text-bold text-3xl pb-1 cursor-pointer "
      >
        +
      </div>
    </div>
  );
}

export default PlusButton;
