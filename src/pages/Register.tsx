import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values: FormValues) => {
    signup(values);
  });

  console.log(errors);

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          {...register("username", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
          placeholder="Username"
          className={`inputbox
          ${errors.username && "border-2 border-red-500"}`}
        />
        {errors.username && (
          <p className="text-red-500">
            {errors.username?.type === "required"
              ? "Username is required"
              : "Username must be between 3 and 20 characters"}
          </p>
        )}
        <input
          type="email"
          {...register("email", {
            required: true,
            maxLength: 35,
          })}
          placeholder="Email"
          className={`inputbox
          ${errors.email && "border-2 border-red-500"}`}
        />
        {errors.email ? (
          <p className="text-red-500">
            {errors.email?.type === "required"
              ? "Email is required"
              : "Email must be less than 35 characters"}
          </p>
        ) : (
          registerErrors.map((error: string, index: number) => {
            return (
              <p className="text-red-500" key={index}>
                {error}
              </p>
            );
          })
        )}

        <input
          type="password"
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Password"
          className={`inputbox
          ${errors.password && "border-2 border-red-500"}`}
        />
        {errors.username && (
          <p className="text-red-500">
            {errors.username?.type === "required"
              ? "Password is required"
              : "Password must be between 6 and 20 characters"}
          </p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
