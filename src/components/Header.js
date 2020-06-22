import React, { useContext } from "react";
import { Link } from "react-router-dom";

import appContext from "../context/appContext";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h2>PickMe</h2>
      </Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
    </header>
  );
}
