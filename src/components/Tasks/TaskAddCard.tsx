import { HiOutlinePlusSm } from "react-icons/hi";
import { useTasks } from "../../context/TasksContext";

function TaskAddCard() {
  const { openTaskModal } = useTasks();

  return (
    <div
      onClick={() => openTaskModal()}
      className="flex items-center justify-center gap-2 bg-neutral-900 border-[1.5px] border-neutral-600 w-[90%] sm:w-[100%] lg:w-[47%] xl:w-[31%] 2xl:w-[23%] h-[240px] p-4 rounded-md mb-4 hover:bg-neutral-800 transition cursor-pointer text-neutral-400 hover:text-neutral-300"
    >
      <HiOutlinePlusSm size={28} />
      <h2 className="font-medium">Add a new task</h2>
    </div>
  );
}

export default TaskAddCard;
