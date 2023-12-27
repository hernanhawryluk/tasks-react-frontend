import FastNotes from "../components/Calendar/FastNotes";
import TaskCalendar from "../components/Calendar/TaskCalendar";
import Heading from "../components/Heading";
import Tasks from "./Tasks";

function Calendar() {
  return (
    <div className="flex gap-8 min-h-[78vh] mb-[92px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col rounded-xl w-[380px] border-[1.5px] border-neutral-700 relative pb-4">
          <div className="pt-5 pl-8 pb-2">
            <Heading title={"Calendar"} />
          </div>

          <TaskCalendar />
          <div className="absolute inset-0 bg-neutral-900 opacity-90 rounded-xl z-0" />
        </div>
        <div className="flex flex-col rounded-xl w-[380px] border-[1.5px] border-neutral-700 h-full relative px-8">
          <div className="px-1 py-5 h-full mb-20">
            <Heading title="Fast notes" />
            <div className="pt-4 relative z-[1] h-full">
              <FastNotes />
            </div>
          </div>
          <div className="absolute inset-0 bg-neutral-900 opacity-90 rounded-xl z-0" />
        </div>
      </div>

      <Tasks />
    </div>
  );
}

export default Calendar;
