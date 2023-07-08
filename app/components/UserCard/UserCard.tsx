"use client";
import styles from "./UserCard.module.css";
import { useGlobalContext } from "@/app/Context/store";

type userProps = {
  name: string;
  email: string;
  page: string;
  userId: number;
};

type userType = {
  id: number;
  expiryTime: number;
};

const UserCard = ({ name, page, email, userId }: userProps) => {
  const {
    query,
    showUserDetails,
    handleTopUser,
    topUsers,
    blockedUsers,
    handleUserControl,
  } = useGlobalContext();

  return (
    <div className={styles.userCard}>
      <div className={styles.userCardText}>
        <h2>{name}</h2>
        <div className={styles.userCardTextEmail}>
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
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <p>{email}</p>
        </div>
      </div>
      <div className={styles.isBlockedContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`${styles.topUser} ${
            topUsers?.some((user: any) => user?.id === userId) &&
            styles.topUserTrue
          }`}
          onClick={() => handleTopUser(userId)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
        <p>Top User</p>
      </div>
      {page !== "topUser" && (
        <div className={styles.isBlockedContainer}>
          <label className={styles.switch}>
            <input type="checkbox" onChange={() => handleUserControl(userId)} />
            <span
              className={`${styles.slider} ${styles.round}  ${
                blockedUsers?.some((user: any) => user?.id === userId) &&
                styles.sliderActive
              }`}
            ></span>
          </label>
          <p
            className={`${
              blockedUsers?.some((user: any) => user?.id === userId)
                ? styles.blocked
                : styles.unBlocked
            }`}
          >
            {blockedUsers?.some((user: any) => user?.id === userId)
              ? "Blocked"
              : "unblocked"}
          </p>
        </div>
      )}

      {blockedUsers?.some((user: userType) => user?.id === userId) && (
        <div className={styles.timer}>
          <p>Unblock after 5 mins</p>
        </div>
      )}

      {query && (
        <button
          className={styles.userKnowMoreBtn}
          onClick={() => showUserDetails(userId)}
        >
          Know more
        </button>
      )}
    </div>
  );
};

export default UserCard;
