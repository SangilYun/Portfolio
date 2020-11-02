import Layout from "components/layout";
import Container from "components/container";
import styles from "./styles.module.css";
import fetchContentful from "utils/fetchContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface BlogPostProps {
  post: Array<{ title: string; description: any }>;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const { title, description } = post[0];
  return (
    <Layout>
      <Container>
        <div className={styles.root}>
          <div className={styles.title}>{title}</div>
          <div>{documentToReactComponents(description.json)}</div>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const {
    data: {
      blogPostsCollection: { items },
    },
  } = await fetchContentful(`query{
    blogPostsCollection(where:{sys:{id:"${params.id}"}}){
    items{
      title,
      description{
        json
      },
  
    }
  }
}`);
  return { props: { post: items } };
};
export const getStaticPaths = async () => {
  const {
    data: {
      blogPostsCollection: { items },
    },
  } = await fetchContentful(`query{
        blogPostsCollection{
          items{
            sys{
              id
            },
          }
        }
      }`);
  const paths = items.map((item: { sys: { id: string } }) => ({
    params: { id: item.sys.id },
  }));
  return { paths, fallback: false };
};
