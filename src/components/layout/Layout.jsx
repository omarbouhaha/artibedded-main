import React from "react";
import NavBar from "./NavBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />

      <div className="children">
        <div className="height-between-navbar"></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
