import Head from "next/head";
import Footer from "components/footer";
import Layout from "components/layout";
import Container from "components/container";
import Profile from "components/profile";
import Project from "components/highlights/project";
import Blog from "components/highlights/blog";
import styles from "./styles.module.css";
// import styles from "../styles/Home.module.css";

export default function App() {
  return (
    <div className={styles.root}>
      <Head>
        <title> Sangil Yun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <Profile />
          <Project />
          <Blog />
        </Container>
      </Layout>

      <Footer />
    </div>
  );
}
