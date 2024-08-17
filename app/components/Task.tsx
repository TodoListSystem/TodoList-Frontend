import { ITask } from "@/types/tasks";

interface TaskProp {
  task: ITask;
}

const Task: React.FC<TaskProp> = ({ task }) => {
  return (
    <tr>
      <td>{task.text}</td>
      <td>Opertions</td>
    </tr>
  );
};

export default Task;
