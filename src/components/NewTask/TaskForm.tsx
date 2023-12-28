import { useForm } from "react-hook-form";
import { useTasks } from "../../context/TasksContext";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Heading from "../Heading";
import { IoCloseCircle } from "react-icons/io5";
import toast from "react-hot-toast";
dayjs.extend(utc);

type FieldValuesProps = {
  title: string;
  description: string;
  date: string | Date;
};

function TaskForm() {
  const { taskToEdit, createOnDay, loader, closeTaskModal } = useTasks();
  const { register, setValue, handleSubmit, formState } =
    useForm<FieldValuesProps>();
  const { getTask, createTask, updateTask } = useTasks();

  useEffect(() => {
    const loadTask = async () => {
      if (taskToEdit !== "") {
        const task = await getTask(taskToEdit);
        if (task.title) setValue("title", task.title);
        if (task.description) setValue("description", task.description);
        if (task.date)
          setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      } else if (createOnDay) {
        setValue("date", dayjs(createOnDay).utc().format("YYYY-MM-DD"));
      } else {
        setValue("date", dayjs(new Date()).utc().format("YYYY-MM-DD"));
      }
    };
    loadTask();
  }, []);

  useEffect(() => {
    if (formState.errors.title) {
      toast.error("Title is required");
    }
    if (formState.errors.description) {
      toast.error("Description is required");
    }
    if (formState.errors.date) {
      toast.error("Date is required");
    }
  }, [formState]);

  const onSubmit = handleSubmit(async (data: FieldValuesProps) => {
    const validData = {
      ...data,
      date: data.date
        ? new Date(dayjs(data.date).utc().format())
        : new Date(dayjs.utc().format()),
    };

    if (taskToEdit) {
      updateTask(taskToEdit, validData);
    } else {
      createTask(validData);
    }
    closeTaskModal();
  });

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-zinc-800 w-[400px] h-[520px] p-[0.6px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500">
        <div className="bg-zinc-800 w-full h-full p-6 font-semibold rounded-xl border-[1.5px] border-neutral-600">
          <div className="flex justify-between">
            <Heading title="Create a Task" />
            <IoCloseCircle
              size={28}
              onClick={closeTaskModal}
              className="cursor-pointer mt-[3px] text-neutral-400 hover:text-neutral-200 transition active:scale-95"
            />
          </div>
          <form onSubmit={onSubmit} className="flex flex-col mt-8">
            <label htmlFor="title" className="label">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              className="inputbox"
            />

            <label htmlFor="title" className="label mt-4">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Description"
              {...register("description", { required: true })}
              className="inputbox"
            />
            <label htmlFor="date" className="label mt-4">
              Date
            </label>
            <input
              type="date"
              {...register("date", { required: true })}
              className="inputbox"
            />
            <button className="button mt-8">
              {!loader ? "Save" : taskToEdit !== "" ? "Updating" : "Creating"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
