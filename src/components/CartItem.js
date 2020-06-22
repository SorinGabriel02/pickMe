import React, { useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../context/appContext";
import useHover from "../hooks/useHover";

export default function CartItem({ item }) {
  const { manageCart } = useContext(AppContext);
  const [isHovered, ref] = useHover();

  return (
    <div className="cart-item">
      <i
        ref={ref}
        onClick={() => manageCart(item)}
        className={`ri-delete-bin-${isHovered ? "fill" : "line"}`}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
