import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGrid.css';

const ProductGrid = ({ products = [], loading = false, error = null, onAddToCart }) => {
  const [displayProducts, setDisplayProducts] = useState(products);

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  if (error) {
    return (
      <section className="product-grid-error" role="alert">
        <div className="error-content">
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Try Again
          </button>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="product-grid" aria-busy="true" aria-label="Loading products">
        <div className="skeleton-grid">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="skeleton-card">
              <div className="skeleton-image"></div>
              <div className="skeleton-title"></div>
              <div className="skeleton-price"></div>
              <div className="skeleton-button"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!displayProducts || displayProducts.length === 0) {
    return (
      <section className="product-grid-empty" role="status">
        <div className="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M3 9h18M9 3v18" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <h2>No products found</h2>
          <p>Try adjusting your filters to find what you're looking for</p>
        </div>
      </section>
    );
  }

  return (
    <section className="product-grid-empty">
      <div className="products-container">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
