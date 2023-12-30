import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

function Register() {
  const [passwordHidden, setPasswordHidden] = useState<boolean>(true);

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
    <div className="flex h-[calc(100vh-300px)] items-center justify-center relative z-[2]">
      <div className="absolute bg-zinc-800 max-w-lg w-full p-[0.6px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500">
        <div className="bg-zinc-800 max-w-lg w-full p-7 sm:p-10 rounded-xl border-[1.5px] border-neutral-600">
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
            <label htmlFor="password" className="label mt-4 relative">
              Password
              <div className="absolute right-4 top-[42px] cursor-pointer text-neutral-300">
                {passwordHidden ? (
                  <FaEye
                    size={20}
                    onClick={() => setPasswordHidden(!passwordHidden)}
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={() => setPasswordHidden(!passwordHidden)}
                  />
                )}
              </div>
            </label>
            <input
              type={passwordHidden ? "password" : "text"}
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
            <Link to="/login" className="text-sky-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
