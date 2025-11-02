import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return null;
  }

  const {
    id,
    title,
    price,
    image,
    rating = { rate: 0, count: 0 },
    category = 'Product'
  } = product;

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart(product);
  };

  return (
    <article className="product-card" data-product-id={id}>
      <div className="product-image-container">
        {/* Product Image */}
        <img
          src={image}
          alt={`${title} - Product Image`}
          className="product-image"
          loading="lazy"
        />

        {/* Category Badge */}
        <span className="category-badge">{category}</span>

        {/* Wishlist Button */}
        <button
          className={`wishlist-icon ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="product-details">
        {/* Category Label */}
        <span className="product-category">
          {category.toUpperCase()}
        </span>

        {/* Product Title */}
        <h3 className="product-title">
          <a href={`/product/${id}`} title={`View ${title}`}>
            {title}
          </a>
        </h3>

        {/* Rating */}
        {rating.rate > 0 && (
          <div className="product-rating" aria-label={`Rating: ${rating.rate} out of 5 stars`}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < Math.round(rating.rate) ? 'filled' : ''}`}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>
            <span className="rating-text">
              {rating.rate} ({rating.count} reviews)
            </span>
          </div>
        )}

        {/* Price Section */}
        <div className="product-price-section">
          <span className="product-price" aria-label={`Price: $${price.toFixed(2)}`}>
            ${price.toFixed(2)}
          </span>
          {/* Optional: Original price with discount */}
          <span className="original-price" style={{ display: 'none' }}>
            ${(price * 1.2).toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          aria-label={`Add ${title} to cart`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="21" r="1" fill="currentColor"/>
            <circle cx="20" cy="21" r="1" fill="currentColor"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          ADD TO CART
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
