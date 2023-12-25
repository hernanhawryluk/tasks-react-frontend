import { useForm } from "react-hook-form";
import { useTasks, Task } from "../../context/TasksContext";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskForm() {
  const { taskToEdit, loader, closeTaskModal } = useTasks();
  const { register, setValue, handleSubmit } = useForm();
  const { getTask, createTask, updateTask } = useTasks();

  useEffect(() => {
    const loadTask = async () => {
      if (taskToEdit !== "") {
        const task = await getTask(taskToEdit);
        if (task.title) setValue("title", task.title);
        if (task.description) setValue("description", task.description);
        if (task.date)
          setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    };
    loadTask();
  }, []);

  const onSubmit = handleSubmit(async (data: Task) => {
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
      <div className="bg-zinc-800 w-[400px] h-[500px] p-10 rounded-xl">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="inputbox"
          />

          <label htmlFor="title">Description</label>
          <textarea
            rows={3}
            placeholder="Description"
            {...register("description")}
            className="inputbox"
          />
          <label htmlFor="date">Date</label>
          <input type="date" {...register("date")} className="inputbox" />
          <button>
            {!loader ? "Save" : taskToEdit !== "" ? "Updating" : "Creating"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
