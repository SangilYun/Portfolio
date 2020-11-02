import Layout from "components/layout";
import Container from "components/container";
import BlogCard from "components/blogCard";
import fetchContentful from "utils/fetchContentful";
import styles from "./styles.module.css";

interface BlogProps {
  blogPosts: Array<{
    sys: { id: string };
    title: string;
    description: { json: Array<any> }; //TODO: add description type
  }>;
}
const Blog = ({ blogPosts }: BlogProps) => {
  return (
    <Layout>
      <Container>
        <div className={styles.root}>
          <header className={styles.pageTitle}>Blog</header>
          <div>
            {blogPosts.map((post, index) => (
              <BlogCard
                id={post.sys.id}
                key={index}
                title={post.title}
                description={post.description.json}
              />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default Blog;

export const getStaticProps = async () => {
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
        title,
        description{
          json
        }
      }
    }
  }`);

  return {
    props: { blogPosts: items },
  };
};
