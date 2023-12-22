import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
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
          {errors.password && (
            <p className="text-red-500">
              {errors.password?.type === "required"
                ? "Password is required"
                : "Password must be between 6 and 20 characters"}
            </p>
          )}
          <button type="submit">Register</button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
