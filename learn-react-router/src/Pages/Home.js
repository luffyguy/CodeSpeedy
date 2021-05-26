import React from "react";
import {Link} from "react-router-dom"
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/">Home </Link>
      <Link to="/blue">Blue</Link>
      <Link to="/green">Green</Link>
      <Link to="/red">Red</Link>
    </div>
  );
};

export default Home;
