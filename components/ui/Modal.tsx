interface ModalProps {
  isModalOpen: boolean;
  hideModal: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, hideModal, children }) => {
  return (
    <dialog
      id="my_modal_2"
      className={`modal ${isModalOpen ? "modal-open" : ""}`}
    >
      <div className="modal-box">{children}</div>
    </dialog>
  );
};

export default Modal;
