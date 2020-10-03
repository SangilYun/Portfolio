import * as React from "react";
import Navbar from "../navbar";
import styles from "./styles.module.css";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
