import { useForm } from "react-hook-form";
import { useTasks, Task } from "../../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskForm() {
  const { register, setValue, handleSubmit } = useForm();
  const { getTask, createTask, updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        if (task.title) setValue("title", task.title);
        if (task.description) setValue("description", task.description);
        if (task.date)
          setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    };
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data: Task) => {
    const validData = {
      ...data,
      date: data.date
        ? new Date(dayjs(data.date).utc().format())
        : new Date(dayjs.utc().format()),
    };

    if (params.id) {
      updateTask(params.id, validData);
    } else {
      createTask(validData);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
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
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
