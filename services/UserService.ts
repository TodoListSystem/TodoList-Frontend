import { IApiResponse, IUser } from "@/types/global-types";
import { ApiService } from "./ApiService";

export class UserService extends ApiService {
  async registerUser(data: IUser): Promise<IApiResponse<any>> {
    try {
      const response = await this.post<IApiResponse<IUser>>(
        "/user/register",
        data
      );
      return response;
    } catch (error) {
      throw new Error("Failed to register user. Please try again.");
    }
  }

  async loginUser(data: any): Promise<any> {
    try {
      const response = await this.post<{ data: any }>("/user/login", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  getUser(): IUser | null {
    const dataInLocal = localStorage.getItem("user");

    // handle the case where the data might be null
    if (!dataInLocal) {
      throw new Error("No user data found in local storage.");
    }

    try {
      const userData: IUser = JSON.parse(dataInLocal).user;
      return userData;
    } catch (error) {
      throw error;
    }
  }

  isUserLoggedIn(): boolean {
    const user = localStorage.getItem("user");
    return user !== null;
  }

  async getUserProfile(userId: number): Promise<IUser> {
    try {
      return await this.get<IUser>(`/user/${userId}`);
    } catch (error) {
      throw error;
    }
  }

  singOutUser() {
    const dataInLocal = localStorage.getItem("user");

    // handle the case where the data might be null
    if (!dataInLocal) {
      throw new Error("No user data found in local storage.");
    }

    localStorage.removeItem("user");
  }
}

export const userService = new UserService();
