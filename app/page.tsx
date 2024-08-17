"use client";

import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { ITask } from "@/types/tasks";
import { getAllTasks } from "@/api";

export default function Home() {
  const [existingTasks, setExistingTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllTasks();
        setExistingTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks: ", error);
      }
    };

    fetchTasks();
    return () => {
      setExistingTasks([]);
    };
  }, []);

  const updateTaskList = (newTask: ITask) => {
    setExistingTasks((prev) => [...prev, newTask]);
  };

  return (
    <main className="max-w-4xl mx-auto mt-10">
      <div className="text-center my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold"> Todo List App </h2>
        <AddTask handleCreatedNewTask={updateTaskList} />
      </div>
      <TodoList tasks={existingTasks} />
    </main>
  );
}
