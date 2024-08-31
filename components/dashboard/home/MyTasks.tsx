"use client";

import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import { ITaskList } from "@/types/global-types";
import React, { useState } from "react";

const MyTasks = () => {
  const [existingTasks, setExistingTasks] = useState<ITaskList[]>([]);

  const updateTaskList = (newTask: ITaskList) => {
    setExistingTasks((prev) => [...prev, newTask]);
  };

  return (
    <>
      <div className="p-5 mb-5 flex justify-between items-center rounded-lg bg-gray-800">
        <h2 className="text-2xl font-bold"> Tasks to be completed </h2>
        <AddTask handleCreatedNewTask={updateTaskList} />
      </div>
      <TodoList tasks={existingTasks} />
    </>
  );
};

export default MyTasks;
{
  /* <div className="grid grid-cols-2 gap-4 mb-4">
  <div className="flex items-center justify-center rounded h-28 bg-gray-800">
    <p className="text-2xl text-gray-500">
      <svg
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </p>
  </div>
  <div className="flex items-center justify-center rounded h-28 bg-gray-800">
    <p className="text-2xl text-gray-500">
      <svg
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </p>
  </div>
</div>; */
}
