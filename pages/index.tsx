import Head from "next/head";
import Footer from "components/footer";
import Layout from "components/layout";
import Container from "components/container";
import Profile from "components/profile";
import Project from "components/highlights/project";
import Blog from "components/highlights/blog";

import fetchContentful from "utils/fetchContentful";

import type { blogItem } from "components/highlights/blog/blog";
//TODO: delete console.log

export default function App({
  data,
}: {
  //TODO: type 정리하기
  data: {
    projectPostsCollection: { items: any };
    blogPostsCollection: { items: Array<blogItem> };
  };
}) {
  console.log("data", data);
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

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetchContentful(`query{
  	projectPostsCollection(limit:5){
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
blogPostsCollection(limit:5){
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
  console.log("data", data);
  return {
    props: { ...data },
  };
}
