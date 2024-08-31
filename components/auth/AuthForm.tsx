"use client";

import Register from "./Register";
import Login from "./Login";
import Image from "next/image";
import { useState } from "react";

const AuthForm = () => {
  const [formType, setFormType] = useState<"login" | "register">("login");
  const FormMapping = {
    login: Login,
    register: Register,
  };

  // handle type of form by its type
  const FormComponent = FormMapping[formType];

  return (
    <section className="bg-white" style={{ backgroundColor: "#1d232a" }}>
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-md">
          <div className="flex justify-center mx-auto">
            <Image
              src="/gifs/Register.gif"
              alt=""
              width={150}
              height={150}
              priority
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <a
              onClick={() => setFormType("login")}
              className={`w-1/3 pb-4 font-medium text-center capitalize cursor-pointer ${
                formType === "login"
                  ? "border-b-2 border-blue-400 text-white"
                  : "border-b text-gray-300 border-gray-400"
              }`}
            >
              sign in
            </a>
            <a
              onClick={() => setFormType("register")}
              className={`w-1/3 pb-4 font-medium text-center capitalize cursor-pointer ${
                formType === "register"
                  ? "border-b-2 border-blue-400 text-white"
                  : "border-b text-gray-300 border-gray-400"
              }`}
            >
              sign up
            </a>
          </div>
          <FormComponent handleSetFormType={setFormType} />
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
