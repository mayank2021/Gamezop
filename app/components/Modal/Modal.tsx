import styles from "./Modal.module.css";

type modalProps = {
  title?: string;
  description?: string;
  userDetails?: any;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal = ({
  title,
  description,
  showModal,
  setShowModal,
  userDetails,
}: modalProps) => {
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
        {title ? (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
          </>
        ) : (
          <div>
            <h2>
              {userDetails?.name}[{userDetails?.username}]
            </h2>
            <div className={styles.infoContainer}>
              <p className={styles.paraUtility}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.icons}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span> {userDetails?.email}</span>
              </p>
              <p className={styles.paraUtility}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.icons}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span> {userDetails?.phone}</span>
              </p>
              <p className={styles.paraUtility}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={styles.icons}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                  />
                </svg>

                <span> {userDetails?.website}</span>
              </p>
            </div>
            <p className={styles.utilityMargin}>
              <strong>Address: </strong>
            </p>
            <p className={styles.company}>
              <span>{userDetails?.address?.street}</span>,{" "}
              <span>{userDetails?.address?.suite}</span>,{" "}
              <span>{userDetails?.address?.city}</span>,{" "}
              <span>(Zip){userDetails?.address?.zipcode}</span>
            </p>
            <p className={styles.utilityMargin}>
              <strong>Company</strong>
            </p>
            <p className={styles.company}>
              <span>{userDetails?.company?.name}</span>,{" "}
              <span>{userDetails?.company?.catchPhrase}</span>,{" "}
              <span>{userDetails?.company?.bs}</span>,{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
