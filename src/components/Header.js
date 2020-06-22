import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../context/appContext";

export default function Header() {
  const { cartItems } = useContext(AppContext);

  const cartIconClass = cartItems.length
    ? "ri-shopping-cart-fill ri-fw ri-2x"
    : "ri-shopping-cart-line ri-fw ri-2x";

  return (
    <header>
      <Link to="/">
        <h2>PickMe</h2>
      </Link>
      <Link to="/cart">
        <i className={cartIconClass}></i>
      </Link>
    </header>
  );
}
