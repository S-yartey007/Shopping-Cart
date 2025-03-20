import React from "react";
import { Link } from "react-router-dom";

const Navebar = () => {
  return (
    <div>
      <div>
        <Link to="/homepage">Homepage</Link>
      </div>
      <div>
        <Link to="/shopping">Shopping Page</Link>
      </div>
    </div>
  );
};

export default Navebar;
