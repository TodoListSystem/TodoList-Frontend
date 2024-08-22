interface ModalProps {
  isModalOpen: boolean;
  hideModal: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, hideModal, children }) => {
  return (
    <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => hideModal(false)}
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
