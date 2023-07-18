import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
