import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/translate">Translation</Link>
      <Link to="/generate">Generation</Link>
      <Link to="/image">Image Generation</Link>
    </div>
  );
};

export default Sidebar;
