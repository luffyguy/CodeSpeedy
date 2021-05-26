import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Red = () => {
  return (
    <div className="red">
      <h3>I am Red page.</h3>
      <Link to="/">Home </Link>
    </div>
  );
};

export default Red;
