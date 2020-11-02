import * as React from "react";
import Navbar from "../navbar";
import Footer from "components/footer";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
