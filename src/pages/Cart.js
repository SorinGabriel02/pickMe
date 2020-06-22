import React, { useContext, useState, useRef } from "react";

import { AppContext } from "../context/appContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const messageRef = useRef(null);
  const [isOrdering, setIsOrdering] = useState(false);
  const { cartItems, setCartItems } = useContext(AppContext);

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const totalCost =
    cartItems.length === 0
      ? "$0.00"
      : (cartItems.length * 5.99).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
  // order simulation
  const handleOrder = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setCartItems([]);
      setIsOrdering(false);
      messageRef.current.innerText = "The order has been placed.";
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      {cartItems.length === 0 ? (
        <p ref={messageRef} style={{ textAlign: "center" }}>
          There are no items in the cart...
        </p>
      ) : (
        <p className="total-cost">Total: {totalCost}</p>
      )}

      <div className="order-button">
        {cartItems.length > 0 && (
          <button onClick={handleOrder}>
            {!isOrdering ? "Place Order" : "Ordering..."}
          </button>
        )}
      </div>
    </main>
  );
}
