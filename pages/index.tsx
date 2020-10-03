import Head from "next/head";
import Layout from "components/layout";
import Container from "components/container";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Sangil Yun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Container>
          <h1>Sangil Yun's website</h1>
        </Container>
      </Layout>
    </div>
  );
}
