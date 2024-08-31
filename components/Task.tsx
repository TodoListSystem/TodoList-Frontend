import { ITaskList } from "@/types/global-types";

interface TaskProp {
  task: ITaskList;
}

const Task: React.FC<TaskProp> = ({ task }) => {
  return (
    <tr>
      <td>{task.content}</td>
      <td>Opertions</td>
    </tr>
  );
};

export default Task;
