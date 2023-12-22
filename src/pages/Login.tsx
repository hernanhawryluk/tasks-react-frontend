import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {LoginErrors &&
            LoginErrors.map((error: string, index: number) => {
              return (
                <p className="text-red-500" key={index}>
                  {error}
                </p>
              );
            })}
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
          {errors.email && (
            <p className="text-red-500">
              {errors.email?.type === "required"
                ? "Email is required"
                : "Email must be less than 35 characters"}
            </p>
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
          <button type="submit">Login</button>
        </form>
        <p className="text-center">
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
