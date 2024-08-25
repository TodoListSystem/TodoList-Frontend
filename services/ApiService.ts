import { AxiosRequestConfig } from "axios";
import axiosInstance from "./AxiosInstance";

export class ApiService {
  protected async get<T>(
    url: string,
    confing?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.get(url, confing);
    return response.data;
  }

  protected async post<T>(
    url: string,
    data: unknown,
    confing?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.post(url, data, confing);
    return response.data;
  }

  protected async put<T>(
    url: string,
    data: unknown,
    confing?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.put(url, data, confing);
    return response.data;
  }

  protected async delete<T>(
    url: string,
    confing?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.delete(url, confing);
    return response.data;
  }
}
