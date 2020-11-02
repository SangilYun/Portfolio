import Head from "next/head";
import Layout from "components/layout";
import Container from "components/container";
import Profile from "components/profile";
import Project from "components/highlights/project";
import Blog from "components/highlights/blog";

import fetchContentful from "utils/fetchContentful";

import type { BlogItem } from "components/highlights/blog/blog";
import type { ProjectPost } from "components/highlights/project/project";

export default function App({
  data,
}: {
  data: {
    projectPostsCollection: { items: Array<ProjectPost> };
    blogPostsCollection: { items: Array<BlogItem> };
  };
}) {
  return (
    <div>
      <Head>
        <title> Sangil Yun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <Profile />
          <Project projectPosts={data.projectPostsCollection.items} />
          <Blog blogPosts={data.blogPostsCollection.items} />
        </Container>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchContentful(`query{
  	projectPostsCollection(limit:5, order:sys_firstPublishedAt_DESC){
      items{
        sys{
          id
        },
        title,
        imagesCollection(limit:1){
          items{
            url
          }
        }
      }
    },
blogPostsCollection(limit:5, order:sys_firstPublishedAt_DESC){
      items{
        sys{
          id
        },
        title,
        date,
        description{
          json,
          }
        }
      }
    }
    `);
  return {
    props: { ...data },
    revalidate: 1,
  };
}
