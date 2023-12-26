import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";

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
    <div className="flex h-[calc(100vh-240px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-lg w-full p-10 rounded-xl border-[1.5px] border-neutral-600">
        <div className="mb-6">
          <Heading title="Register" />
        </div>
        <form onSubmit={onSubmit} className="flex flex-col">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            {...register("username", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
            autoComplete="off"
            placeholder="Username"
            className={`inputbox
          ${errors.username && "border-2 border-red-500"}`}
          />
          {errors.username && (
            <p className="errors">
              {errors.username?.type === "required"
                ? "Username is required"
                : "Username must be between 3 and 20 characters"}
            </p>
          )}
          <label htmlFor="email" className="label mt-4">
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
          {errors.email ? (
            <p className="errors">
              {errors.email?.type === "required"
                ? "Email is required"
                : "Email must be less than 35 characters"}
            </p>
          ) : (
            registerErrors.map((error: string, index: number) => {
              return (
                <p className="errors" key={index}>
                  {error}
                </p>
              );
            })
          )}
          <label htmlFor="password" className="label  mt-4">
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
          <button type="submit" className="button mt-8">
            Register
          </button>
        </form>
        <p className="text-center mt-6">
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
