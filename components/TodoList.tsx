import { ITaskList } from "@/types/global-types";
import Task from "./Task";

interface TodoListProp {
  tasks: ITaskList[];
}

const TodoList: React.FC<TodoListProp> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      {false ? (
        <table className="table">
          <thead>
            <tr>
              <th>Existing Tasks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task key={task._id} task={task} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center mt-5">
          <div className="alert alert-warning max-w-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 shrink-0 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-lg font-semibold">
              There are no tasks to do.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
