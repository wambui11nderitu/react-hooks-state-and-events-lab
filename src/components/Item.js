import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(!inCart);
  };

  const cartText = inCart ? "Remove From Cart" : "Add to Cart";
  const cartClass = inCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;