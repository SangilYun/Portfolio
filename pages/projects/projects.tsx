import Layout from "components/layout";
import Container from "components/container";

import fetchContentful from "utils/fetchContentful";
import styles from "./styles.module.css";
import cn from "classnames";

interface ProjectsProps {
  projects: Array<{
    date: string;
    imagesCollection: { items: Array<{ url: string; title: string }> };
  }>;
}

//TODO: consider reusing project component
const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Layout>
      <Container>
        <div>
          <header className={styles.title}>Projects</header>
          <div>Here are some of selected projects I've done</div>
          <div className={"container"}>
            <div className={"row"}>
              {projects.map((project, key) => {
                const { url } = project.imagesCollection.items[0];
                return (
                  <div
                    key={key}
                    className={cn(styles.image, "col-4", {
                      "ml-2": key % 3 !== 0,
                    })}
                    style={{ backgroundImage: `url(${url})` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default Projects;

export const getStaticProps = async () => {
  const {
    data: {
      projectPostsCollection: { items },
    },
  } = await fetchContentful(`query{
    projectPostsCollection{
      items {
        title,
        date,
        imagesCollection(limit:1){
          items{
            url
          }
        }
      }
    }
  }`);
  return {
    props: { projects: items },
  };
};
