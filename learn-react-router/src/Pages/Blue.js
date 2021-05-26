import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Blue = () => {
  return (
    <div className = "blue">
      <h3>I am BLUE page.</h3>
      <Link to="/">Home </Link>
    </div>
  );
};

export default Blue;
