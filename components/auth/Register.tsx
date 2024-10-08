"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { userService } from "@/services/UserService";

type FormObject = {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type RegisterProps = {
  handleSetFormType: React.Dispatch<React.SetStateAction<"login" | "register">>;
};

const Register: React.FC<RegisterProps> = ({ handleSetFormType }) => {
  const router = useRouter();
  const [formObject, setFormObject] = useState<FormObject>({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmission: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // check if all form inputs are empty
    for (let key in formObject) {
      if (formObject[key as keyof FormObject] === "") {
        toast.error("All inputs must be entered!");
        return;
      }
    }

    try {
      const response = await userService.registerUser(formObject);

      // save the data of user in local storage
      localStorage.setItem("user", JSON.stringify(response));

      router.push("/dashboard");
      toast.success("Registration successful!");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    setFormObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className="relative flex items-center mt-8">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>

        <input
          type="text"
          name="userName"
          value={formObject.userName}
          onChange={handleFormChange}
          placeholder="User Name"
          className="block w-full py-3 border rounded-lg px-11 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>

        <input
          type="text"
          name="firstName"
          value={formObject.firstName}
          onChange={handleFormChange}
          className="block w-full py-3 border rounded-lg px-11 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="First Name"
        />
      </div>

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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </span>

        <input
          type="text"
          name="lastName"
          value={formObject.lastName}
          onChange={handleFormChange}
          className="block w-full py-3 border rounded-lg px-11 bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Last Name"
        />
      </div>

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
          value={formObject.email}
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
          value={formObject.password}
          onChange={handleFormChange}
          className="block w-full px-10 py-3 border rounded-lg bg-gray-900 text-gray-300 border-gray-600 focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Password"
        />
      </div>

      <div className="mt-6">
        <button className="w-full btn btn-primary text-white">Sign Up</button>

        <div className="mt-6 text-center ">
          <a
            onClick={() => handleSetFormType("login")}
            className="text-sm hover:underline text-blue-400 cursor-pointer"
          >
            Already have an account?
          </a>
        </div>
      </div>
    </form>
  );
};

export default Register;
