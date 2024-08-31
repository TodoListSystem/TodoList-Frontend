"use client";

import { userService } from "@/services/UserService";
import { ILogin } from "@/types/global-types";
import { useRouter } from "next/navigation";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import toast from "react-hot-toast";

type LoginProps = {
  handleSetFormType: React.Dispatch<React.SetStateAction<"login" | "register">>;
};

const Login: React.FC<LoginProps> = ({ handleSetFormType }) => {
  const router = useRouter();
  const [inputForm, setInputForm] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleSubmission: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // check if the inputs are empty
    if (!inputForm.email || !inputForm.password) {
      toast.error("the password and email must not be empty!");
      return;
    }

    // check if the user exits
    try {
      const response = await userService.loginUser(inputForm);
      const user = {
        token: response.token,
        ...response.user,
      };

      // save the data of user if he exists
      localStorage.setItem("user", JSON.stringify(user));

      router.push("/dashboard");
      toast.success("You have successfully logged in");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      else toast.error("Login failed!");
    }
  };

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="relative flex items-center mt-6">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </span>

        <input
          type="email"
          name="email"
          value={inputForm.email}
          onChange={handleFormChange}
          className="block w-full py-3 border rounded-lg px-11 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Email address"
        />
      </div>

      <div className="relative flex items-center mt-4">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-3 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </span>

        <input
          type="password"
          name="password"
          value={inputForm.password}
          onChange={handleFormChange}
          className="block w-full px-10 py-3 border rounded-lg bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
        />
      </div>

      <div className="mt-6">
        <button type="submit" className="w-full btn btn-primary text-white">
          Sign In
        </button>

        <div className="mt-6 text-center ">
          <a
            onClick={() => handleSetFormType("register")}
            className="text-sm hover:underline text-blue-400 cursor-pointer"
          >
            {"Don't have an account?"}
          </a>
        </div>
      </div>
    </form>
  );
};

export default Login;
