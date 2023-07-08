import styles from "./Heading.module.css";

type headingProps = {
  heading: string;
};
const Heading = ({ heading }: headingProps) => {
  return <h2 className={styles.heading}>{heading}</h2>;
};

export default Heading;
