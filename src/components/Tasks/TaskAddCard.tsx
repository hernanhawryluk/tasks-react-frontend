import { HiOutlinePlusSm } from "react-icons/hi";
import { useTasks } from "../../context/TasksContext";

function TaskAddCard() {
  const { openTaskModal } = useTasks();

  return (
    <div className="bg-zinc-800 w-[90%] sm:w-[100%] lg:w-[47%] xl:w-[31%] 2xl:w-[23%] h-[200px] p-[0.5px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 z-[1]">
      <div
        onClick={() => openTaskModal()}
        className="flex items-center justify-center gap-2 bg-neutral-900 border-[1.5px] border-neutral-600 w-full h-full p-4 rounded-xl mb-4 hover:bg-zinc-800 transition cursor-pointer text-neutral-400 hover:text-neutral-300 z-[1]"
      >
        <HiOutlinePlusSm size={28} />
        <h2 className="font-medium">Add a new task</h2>
      </div>
    </div>
  );
}

export default TaskAddCard;
