import { useState } from "react";
import Layout from "components/layout";
import Container from "components/container";
import Tags from "components/tags";
import ProjectPreviewCards from "components/projectPreviewCards";

import fetchContentful from "utils/fetchContentful";
import { useRouter } from "next/router";

import styles from "./styles.module.css";

interface ProjectsProps {
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
  tags: Array<string>;
}

//TODO: consider reusing project component
const Projects = ({ projects, tags }: ProjectsProps) => {
  const [selectedTags, setSelectedTags] = useState(new Set<string>());
  const router = useRouter();

  const projectToDisplay = selectedTags.size
    ? projects.filter(
        (project) =>
          project.tags?.filter((tag) => selectedTags.has(tag)).length > 0
      )
    : projects;

  const onClickTags = (tag: string) =>
    setSelectedTags(
      new Set([...selectedTags].filter((selectedTag) => selectedTag !== tag))
    );

  const onClickProjectPreview = (projectId: string) => {
    router.push(`projects/${projectId}`).then(() => window.scrollTo(0, 0));
  };

  return (
    <Layout>
      <Container>
        <div className={styles.root}>
          <header className={styles.pageTitle}>Projects</header>
          <Tags selectedTags tags={[...selectedTags]} onClick={onClickTags} />
          <Tags
            tags={tags.filter((tag) => !selectedTags.has(tag))}
            onClick={(tag) => setSelectedTags(new Set(selectedTags.add(tag)))}
          />
          <ProjectPreviewCards
            projects={projectToDisplay}
            onClick={onClickProjectPreview}
          />
        </div>
      </Container>
    </Layout>
  );
};
export default Projects;

export const getStaticProps = async () => {
  const {
    data: {
      projectPostsCollection: { items: projects },
      tagsCollection: { items: tags },
    },
  } = await fetchContentful(`query{
    projectPostsCollection(order:sys_firstPublishedAt_DESC){
      items {
        sys{
          id
        },
        title,
        intro,
        description{
          json
        },
        tags,
        imagesCollection(limit:1){
          items{
            url
          }
        }
      }
    }
    tagsCollection{
      items{
        tag
      }
    }
  }`);
  return {
    props: { projects, tags: tags[0].tag },
  };
};
