export interface ITask {
  id: string;
  text: string;
}

export interface IUser {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface INewTask {
  title: string;
  content: string;
  note: string;
}

export interface ITaskList {
  _id: string;
  userId: string;
  title: string;
  content: string;
  note?: string;
  isCompleted: boolean;
  isUpdated: boolean;
  createdAt: Date;
  updatedAt: Date;
}
