import FastNotes from "../components/Tasks/FastNotes";
import TaskCalendar from "../components/Tasks/TaskCalendar";
import Heading from "../components/Heading";
import TaskPanel from "../components/Tasks/TaskPanel";
import { Modal } from "@mui/material";
import TaskForm from "../components/NewTask/TaskForm";
import { useTasks } from "../context/TasksContext";

function Tasks() {
  const { taskModal, closeTaskModal } = useTasks();

  return (
    <div className="flex gap-8 mb-[92px] mt-[-44px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col rounded-xl w-[380px] border-[1.5px] border-neutral-700 relative pb-4">
          <div className="pt-5 pl-8 pb-2">
            <Heading title={"Calendar"} />
          </div>

          <TaskCalendar />
          <div className="absolute inset-0 bg-neutral-950 opacity-50 rounded-xl" />
        </div>
        <div className="flex flex-col rounded-xl w-[380px] border-[1.5px] border-neutral-700 h-full relative px-8">
          <div className="px-1 pt-5 h-full mb-20">
            <Heading title="Fast notes" />
            <div className="pt-4 relative z-[1] h-full">
              <FastNotes />
            </div>
          </div>
          <div className="absolute inset-0 bg-neutral-950 opacity-50 rounded-xl z-0" />
        </div>
      </div>

      <TaskPanel />
      <Modal
        open={taskModal}
        onClose={closeTaskModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <TaskForm />
        </div>
      </Modal>
    </div>
  );
}

export default Tasks;
