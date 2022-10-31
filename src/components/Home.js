import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="get_started">
        <p>Random Users Generator</p>
        <Link to="/user">
          <button>Go Ahead</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
