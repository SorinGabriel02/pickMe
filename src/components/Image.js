import React, { useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../context/appContext";
import useHover from "../hooks/useHover";

export default function Image({ className, img }) {
  const [hovered, ref] = useHover();
  const { toggleFavorite, cartItems, manageCart } = useContext(AppContext);

  const heartIcon = () => {
    if (img.isFavorite) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-fill favorite"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => toggleFavorite(img.id)}
          className="ri-heart-line favorite"
        ></i>
      );
    }
  };

  const cartIcon = () => {
    if (cartItems.some((item) => item.id === img.id)) {
      return (
        <i
          onClick={() => manageCart(img)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => manageCart(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  };

  return (
    <div ref={ref} className={`image-container ${className}`}>
      <img src={img.url} className="image-grid" alt="" />
      {heartIcon()}
      {cartIcon()}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};
