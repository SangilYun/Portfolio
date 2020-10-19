import styles from "./styles.module.css";

interface ProjectCardsProps {
  projects: Array<{
    sys: {
      id: string;
    };
    title: string;
    intro: string;
    tags: string[];
    description: {
      json: any; //TODO: add description type
    };
    imagesCollection: { items: Array<{ url: string; title: string }> };
  }>;
  onClick: (projectId: string) => void;
}
const ProjectPreviewCards = ({ projects, onClick }: ProjectCardsProps) => {
  return (
    <div className={styles.root}>
      {projects.map((project, key) => {
        const { url } = project.imagesCollection.items[0];
        return (
          <div
            key={key}
            className={styles.projectPreviewCard}
            onClick={() => onClick(project.sys.id)}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${url})` }}
            />
            <div className={styles.caption}>
              <div className={styles.projectTitle}>{project.title}</div>
              <div className={styles.projectIntro}>{project.intro}</div>
              <div className={styles.tags}>
                {project.tags?.map((tag, index) => (
                  <span key={index}>{`#${tag} `}</span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectPreviewCards;
