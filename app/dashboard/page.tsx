"use client";

import { useEffect, useState } from "react";
import AddTask from "../../components/AddTask";
import { ITask } from "../../types/globalTypes";
import TodoList from "../../components/TodoList";
import { userService } from "@/services/UserService";
import { useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [existingTasks, setExistingTasks] = useState<ITask[]>([]);

  useEffect(() => {
    if (userService.isUserLoggedIn()) setIsUserLoggedIn(true);
    else router.push("/");
  }, []);

  const updateTaskList = (newTask: ITask) => {
    setExistingTasks((prev) => [...prev, newTask]);
  };

  return (
    <>
      {isUserLoggedIn && (
        <main className="max-w-4xl mx-auto mt-10">
          <div className="text-center my-5 flex flex-col gap-4">
            <h2 className="text-2xl font-bold"> Todo List App </h2>
            <AddTask handleCreatedNewTask={updateTaskList} />
          </div>
          <TodoList tasks={existingTasks} />
        </main>
      )}
    </>
  );
};

export default Dashboard;
