import HighlightTitle from "../highlighTitle";
import HighlightedText from "components/highlightedText";
import ProjectCard from "./projectCard";
import styles from "./styles.module.css";

const Project = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <HighlightTitle>Highlighted Projects</HighlightTitle>
        <HighlightedText>view all blog posts</HighlightedText>
      </div>
      <div style={{ display: "flex", width: "100%", overflow: "scroll" }}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
