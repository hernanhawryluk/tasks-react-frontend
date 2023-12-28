import FastNotes from "../components/Calendar/FastNotes";
import TaskCalendar from "../components/Calendar/TaskCalendar";
import Heading from "../components/Heading";
import TaskPanel from "../components/Tasks/TaskPanel";

function Tasks() {
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
    </div>
  );
}

export default Tasks;
