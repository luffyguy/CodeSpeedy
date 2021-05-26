import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Green = () => {
  return (
    <div className="green">
      <h3>I am Green page.</h3>
      <Link to="/">Home </Link>
    </div>
  );
};

export default Green;
