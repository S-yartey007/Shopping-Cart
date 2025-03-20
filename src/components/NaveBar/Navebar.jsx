import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cartItemCount }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>Cart: {cartItemCount} items</li>
      </ul>
    </nav>
  );
}

export default Navbar;
