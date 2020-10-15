import Layout from "components/layout";
import Container from "components/container";
import ImageList from "components/imageList";
import fetchContentful from "utils/fetchContentful";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
}
const Project = ({ post }: { post: Array<ProjectProps> }) => {
  if (!post) {
    return null;
  }
  console.log("project props", post);
  const {
    title,
    description,
    imagesCollection: { items: images },
  } = post[0];
  return (
    <Layout>
      <Container>
        <header className={styles.header}>
          <h1>{title}</h1>
          <aside className={styles.buttons}>
            <span>
              <FontAwesomeIcon
                className={" m-0 mr-2 fas-2x"}
                icon={["fas", "desktop"]}
              />
              demo
            </span>
            <span className={styles.github_btn}>
              <FontAwesomeIcon
                className={"m-0 mr-2 fa-lg"}
                icon={["fab", "github"]}
              />
              github
            </span>
          </aside>
        </header>
        <main className={styles.description}>
          {documentToReactComponents(description.json)}
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
  console.log("getStaticProps, params", params);
  const data = await fetchContentful(`query{
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
    props: { post: data.data.projectPostsCollection.items },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const data = await fetchContentful(`query{
  	projectPostsCollection(limit:5){
      items{
        sys{
          id
        },
      }
    }
  }
    `);
  const paths = data?.data.projectPostsCollection.items.map(
    (item: { sys: { id: string } }) => ({
      params: { id: item.sys.id },
    })
  );
  return {
    paths,
    fallback: false,
    // fallback: true is not supported when using next export.
  };
};
