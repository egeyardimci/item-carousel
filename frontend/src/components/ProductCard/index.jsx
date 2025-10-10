import ColorPicker from "../ProductCard/ColorPicker";
import Rating from "./Rating";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.images.yellow}
          alt={product.name}
          className="product-img"
          decoding="async"
        />
      </div>
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <span className="product-price">${product.price.toFixed(2)} USD</span>
        <ColorPicker />
        <Rating rating={product.popularityScore} />
      </div>
    </div>
  )
}

export default ProductCard;