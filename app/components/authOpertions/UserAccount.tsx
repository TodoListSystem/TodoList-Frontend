import React, { FormEventHandler } from "react";
import Register from "./Register";
import Image from "next/image";

const UserAccount = () => {
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
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <a
              href="#"
              className="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
            >
              sign in
            </a>
            <a
              href="#"
              className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
            >
              sign up
            </a>
          </div>
          <Register />
        </div>
      </div>
    </section>
  );
};

export default UserAccount;
