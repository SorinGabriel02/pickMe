import React, { useState } from "react";

import { AppContext } from "../context/appContext";

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => setHovered(true);

  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`image-container ${className}`}
    >
      <img src={img.url} className="image-grid" alt="" />
      {hovered && <i className="ri-heart-line favorite"></i>}
      {hovered && <i className="ri-add-circle-line cart"></i>}
    </div>
  );
}
