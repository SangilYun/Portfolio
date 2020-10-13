import HighlightTitle from "../highlighTitle";
import HighlightedText from "components/highlightedText";
import ProjectCard from "./projectCard";
import styles from "./styles.module.css";

//TODO: add types
const Project = ({ projectPosts }) => {
  console.log("projectPosts", projectPosts);
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <HighlightTitle>Highlighted Projects</HighlightTitle>
        <HighlightedText>view all blog posts</HighlightedText>
      </div>
      <div style={{ display: "flex", width: "100%", overflow: "scroll" }}>
        {projectPosts.map((projectPost) => {
          return (
            <ProjectCard
              key={projectPost.sys.id}
              id={projectPost.sys.id}
              image={projectPost.imagesCollection.items[0]}
              alt={projectPost.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
