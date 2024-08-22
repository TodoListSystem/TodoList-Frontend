import axios from "axios";
import { FormObject, ITask } from "./types/globalTypes";

const BASE_URL = "http://localhost:5000/api/todolist/";

// export const getAllTasks = async (): Promise<ITask[]> => {
//   const resp = await fetch(`${BASE_URL}/tasks`);
//   const data = resp.json();

//   return data;
// };

// export const createNewTask = async (newTask: ITask): Promise<ITask> => {
//   const resp = await fetch(`${BASE_URL}/tasks`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newTask),
//   });

//   const data: ITask = await resp.json();
//   return data;
// };

export const registerUser = (registerObj: FormObject): Promise<any> => {
  return axios
    .post(`${BASE_URL}user/register`, registerObj)
    .then((response) => {
      // check the status code and save the token if the opertions has been success
      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        return;
      }

      return Promise.reject(
        new Error(`Unexpected status code: ${response.status}`)
      );
    })
    .catch((error) => {
      const message = error.response?.data?.msg || "Registration failed.";
      return Promise.reject(new Error(message));
    });
};
