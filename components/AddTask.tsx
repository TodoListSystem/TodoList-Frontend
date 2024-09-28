"use client";

import Modal from "./ui/Modal";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { todoService } from "@/services/TodoService";
import { INewTask, ITaskList } from "@/types/global-types";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

interface AddTaskProp {
  handleCreatedNewTask: (newTask: ITaskList) => void;
}

const AddTask: React.FC<AddTaskProp> = ({ handleCreatedNewTask }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [itHasNote, setItHasNote] = useState<boolean>(false);
  const [formObj, setFormObj] = useState<INewTask>({
    title: "",
    content: "",
    note: "",
    category: "",
  });

  const handleSubmitTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (!formObj.title || !formObj.content || !formObj.category) {
      toast.error("the tile, content and category must not be empty!");
      return;
    }

    try {
      const response = await todoService.createTodo(formObj);
      handleCreatedNewTask(response);
      toast.success("Your task successfully added");

      // reset states
      setModalOpen(false);
      setFormObj({
        title: "",
        content: "",
        note: "",
        category: "",
      });
    } catch (error) {
      toast.error("Your task has not been added");
    }
  };

  const handleFormChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    setFormObj((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <label className="form-control w-full mb-4">
            <div className="label">
              <h1 className="text-2xl">Category</h1>
            </div>
            <select className="select input-bordered w-full">
              <option disabled selected>
                Select Your Category
              </option>
              <option>Experience Category</option>
              <option>Learning Category</option>
              <option>Work Category</option>
            </select>
          </label>
          <label className="form-control w-full mb-4">
            <div className="label">
              <h1 className="text-2xl">Title</h1>
            </div>
            <input
              type="text"
              name="title"
              value={formObj.title}
              onChange={handleFormChange}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <h1 className="text-2xl">Content</h1>
            </div>
            <textarea
              name="content"
              value={formObj.content}
              onChange={handleFormChange}
              className="textarea textarea-bordered textarea-lg w-full mb-4"
            ></textarea>
          </label>
          <label className="form-control w-full cursor-pointer">
            <div
              className="label"
              onClick={() => setItHasNote((prev) => !prev)}
            >
              <h1 className="text-lg flex items-center">
                {itHasNote ? (
                  <FaMinus className="mr-2" />
                ) : (
                  <FaPlus className="mr-2" />
                )}
                Add note for this todo
              </h1>
            </div>
            {itHasNote && (
              <input
                type="text"
                name="note"
                value={formObj.note}
                onChange={handleFormChange}
                className="input input-bordered w-full"
              />
            )}
          </label>
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-neutral text-white"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
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
