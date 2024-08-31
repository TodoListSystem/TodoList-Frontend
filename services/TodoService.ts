import { INewTask, ITaskList } from "@/types/global-types";
import { ApiService } from "./ApiService";

class TodoService extends ApiService {
  async createTodo(data: INewTask): Promise<ITaskList> {
    try {
      const response = await this.post<any>("/todo", data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export const todoService = new TodoService();
