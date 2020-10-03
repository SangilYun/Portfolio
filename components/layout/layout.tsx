import * as React from "react";
import Navbar from "../navbar";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
