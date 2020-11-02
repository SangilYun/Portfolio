import styles from "./styles.module.css";
const ProfileImage = () => {
  return (
    <div
      className={styles.root}
      style={{
        background: `url(/profileImg.JPG) no-repeat center `,
        backgroundSize: "cover",
      }}
    />
  );
};
export default ProfileImage;
