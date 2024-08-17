import { ITask } from "./types/tasks";

const BASE_URL = "http://localhost:3001";

export const getAllTasks = async (): Promise<ITask[]> => {
  const resp = await fetch(`${BASE_URL}/tasks`);
  const data = resp.json();

  return data;
};

export const createNewTask = async (newTask: ITask): Promise<ITask> => {
  const resp = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  const data: ITask = await resp.json();
  return data;
};
