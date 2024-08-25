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
