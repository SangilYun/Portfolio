import styles from "./styles.module.css";

const Container = (props: { children: React.ReactNode }) => {
  return <div className={styles.root}>{props.children}</div>;
};

export default Container;
