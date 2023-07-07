import styles from "./Modal.module.css";

type modalProps = {
  title: string;
  description: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal = ({ title, description, showModal, setShowModal }: modalProps) => {
  return (
    <div className={styles.modalBackground}>
      <div className={`${styles.modal}`}>
        <button
          className={styles.cancelButton}
          onClick={() => setShowModal(!showModal)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Modal;
