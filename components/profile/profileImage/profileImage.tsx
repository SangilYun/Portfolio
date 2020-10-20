import styles from "./styles.module.css";
const ProfileImage = () => {
  return (
    <div
      className={styles.root}
      style={{
        background: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80) no-repeat center `,
        backgroundSize: "cover",
      }}
    />
  );
};
export default ProfileImage;
