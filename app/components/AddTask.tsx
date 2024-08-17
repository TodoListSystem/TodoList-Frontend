"use client";

import { FaPlus } from "react-icons/fa";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { createNewTask } from "@/api";
import { ITask } from "@/types/tasks";

interface AddTaskProp {
  handleCreatedNewTask: (newTask: ITask) => void;
}

const AddTask: React.FC<AddTaskProp> = ({ handleCreatedNewTask }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [addNewTask, setAddeNewTask] = useState<string>("");

  const handleSubmitTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const resp = await createNewTask({
      id: Math.floor(Math.random() * 1000).toString(),
      text: addNewTask,
    });
    handleCreatedNewTask(resp);
    setAddeNewTask("");
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="btn btn-primary w-full text-white"
        onClick={() => setModalOpen(true)}
      >
        Add New Task
        <FaPlus className="ml-2" />
      </button>
      <Modal isModalOpen={modalOpen} hideModal={setModalOpen}>
        <form onSubmit={handleSubmitTask}>
          <h3 className="text-lg font-bold">Add new task</h3>
          <div className="modal-action">
            <input
              type="text"
              value={addNewTask}
              onChange={(e) => setAddeNewTask(e.target.value)}
              placeholder="Type here your task..."
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-success text-white">
              Add Task
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
