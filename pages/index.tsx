import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "./styles.module.css";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Sangil Yun</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.root}>
        <Navbar />
        <h1>Sangil Yun's website</h1>
      </div>
    </div>
  );
}
