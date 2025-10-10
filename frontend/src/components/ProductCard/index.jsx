import ColorPicker from "../ProductCard/ColorPicker";
import Rating from "./Rating";
import './ProductCard.css';
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [imageColor, setImageColor] = useState('yellow');

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.images[imageColor]}
          alt={product.name}
          className="product-img"
          decoding="async"
        />
      </div>
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <span className="product-price">${product.price.toFixed(2)} USD</span>
        <ColorPicker setImageColor={setImageColor} />
        <Rating rating={product.popularityScore} />
      </div>
    </div>
  )
}

export default ProductCard;