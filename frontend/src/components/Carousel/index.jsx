import { useRef } from 'react';
import ProductCard from '../ProductCard';
import './Carousel.css';

const Carousel = ({ products = [] }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = 280; // card width
    const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
  };

  console.log('Products in Carousel:', products);


  return (
    <div className="carousel-container">
      {(
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          &#8249;
        </button>
      )}

      <div
        className="carousel-track"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {products.map((product) => (
          <div key={product.name} className="carousel-item">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {(
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          &#8250;
        </button>
      )}
    </div>
  );
};

export default Carousel;
