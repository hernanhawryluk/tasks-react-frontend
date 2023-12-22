import { useForm } from "react-hook-form";
import { useTasks, Task } from "../../context/TasksContext";

function TaskForm() {
  const { register, handleSubmit } = useForm();
  const { tasks, createTask } = useTasks();

  const onSubmit = handleSubmit((data: Task) => {
    createTask(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="inputbox"
          />
          <textarea
            rows={3}
            placeholder="Description"
            {...register("description")}
            className="inputbox"
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
