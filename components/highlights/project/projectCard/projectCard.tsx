import styles from "./styles.module.css";

//TODO: add types
const ProjectCard = ({ id, image, alt }) => {
  console.log("project card", image);
  const onClick = () => {
    console.log("id", id);
  };
  return (
    <div
      className={styles.root}
      style={{
        background: `url(${image.url}) no-repeat center `,
        backgroundSize: "cover",
      }}
      onClick={onClick}
    />
  );
};
export default ProjectCard;
