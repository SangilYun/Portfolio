import HighlightTitle from "../highlighTitle";
import HighlightedText from "components/highlightedText";
import ProjectCard from "./projectCard";

import styles from "./styles.module.css";

export interface ProjectPost {
  sys: {
    id: string;
  };
  title: string;
  imagesCollection: {
    items: Array<{ url: string }>;
  };
}

const Project = ({ projectPosts }: { projectPosts: Array<ProjectPost> }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <HighlightTitle>Highlighted Projects</HighlightTitle>
        <HighlightedText href={"/projects"}>view all projects</HighlightedText>
      </div>
      <div style={{ display: "flex", width: "100%", overflow: "scroll" }}>
        {projectPosts.map((projectPost: ProjectPost) => {
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
