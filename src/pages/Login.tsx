import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const { signin, isAuthenticated, errors: LoginErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-300px)] items-center justify-center relative z-[1]">
      <div className="bg-zinc-800 max-w-lg w-full p-10 rounded-xl border-[1.5px] border-neutral-600">
        <div className="mb-6">
          <Heading title="Login" />
        </div>
        <form onSubmit={onSubmit} className="flex flex-col">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
              maxLength: 35,
            })}
            autoComplete="off"
            placeholder="Email"
            className={`inputbox
            ${errors.email && "border-2 border-red-500"}`}
          />

          {errors.email && (
            <p className="errors">
              {errors.email?.type === "required"
                ? "Email is required"
                : "Email must be less than 35 characters"}
            </p>
          )}
          <label htmlFor="password" className="label mt-4">
            Password
          </label>
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
            <p className="errors">
              {errors.password?.type === "required"
                ? "Password is required"
                : "Password must be between 6 and 20 characters"}
            </p>
          )}

          <button type="submit" className="button mt-6">
            Login
          </button>
        </form>
        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
