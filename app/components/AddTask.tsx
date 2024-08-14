import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full text-white">
        Add New Task
        <FaPlus className="ml-2" />
      </button>
    </div>
  );
};

export default AddTask;
