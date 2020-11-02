import Layout from "components/layout";
import Container from "components/container";
import ImageList from "components/imageList";
import fetchContentful from "utils/fetchContentful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "./styles.module.css";

interface ProjectProps {
  date: string;
  description: any;
  imagesCollection: {
    items: Array<{ title: string; url: string }>;
  };
  sys: { id: string };
  title: string;
  github: string;
  demo: string;
  tags: string[];
}
const OPTIONS = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      return (
        <span
          onClick={() => window.open(node.data.uri)}
          style={{ color: "#4299e1", cursor: "pointer" }}
        >
          {children}
        </span>
      );
    },
  },
};
const Project = ({ post }: { post: Array<ProjectProps> }) => {
  if (!post) {
    return null;
  }
  const {
    title,
    description,
    github,
    demo,
    tags,
    imagesCollection: { items: images },
  } = post[0];
  return (
    <Layout>
      <Container>
        <header className={styles.header}>
          <h1>{title}</h1>
          <aside className={styles.buttons}>
            {demo && (
              <span
                className={styles.demo_btn}
                onClick={() => {
                  window.open(demo);
                }}
              >
                <FontAwesomeIcon
                  className={" m-0 mr-2 fas-2x"}
                  icon={["fas", "desktop"]}
                />
                demo
              </span>
            )}
            {github && (
              <span
                className={styles.github_btn}
                onClick={() => window.open(github)}
              >
                <FontAwesomeIcon
                  className={"m-0 mr-2 fa-lg"}
                  icon={["fab", "github"]}
                />
                github
              </span>
            )}
          </aside>
        </header>
        <main className={styles.description}>
          {documentToReactComponents(description?.json, OPTIONS)}
          {tags.map((tag) => (
            <span
              key={tag}
              style={{ marginRight: "10px", color: "#4a5568" }}
            >{`#${tag}`}</span>
          ))}
        </main>
        <ImageList images={images} />
      </Container>
    </Layout>
  );
};
export default Project;

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const {
    data: {
      projectPostsCollection: { items },
    },
  } = await fetchContentful(`query{
  	projectPostsCollection(where:{sys:{id:"${params.id}"}}){
      items{
        sys{
          id
        },
        title,
        description{
        	json
      	},
        date,
        github,
        demo,
        tags,
        imagesCollection{
          items{
            title,
            url
          }
        }
      }
  }
}`);
  return {
    props: { post: items },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const {
    data: {
      projectPostsCollection: { items },
    },
  } = await fetchContentful(`query{
  	projectPostsCollection(limit:5){
      items{
        sys{
          id
        },
      }
    }
  }
    `);
  const paths = items.map((item: { sys: { id: string } }) => ({
    params: { id: item.sys.id },
  }));
  return {
    paths,
    fallback: false,
    // fallback: true is not supported when using next export.
  };
};
