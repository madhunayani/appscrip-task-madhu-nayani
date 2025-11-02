import React, { useState } from 'react';
import '../styles/Filters.css';

const Filters = ({ onFilterChange, onPriceChange }) => {
  const [openCategories, setOpenCategories] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // FIXED: Match EXACT category names from Fake Store API
  const categories = [
    { id: 'electronics', label: 'Electronics' },
    { id: 'jewelery', label: 'Jewelery' },
    { id: "men's clothing", label: "Men's Clothing" },
    { id: "women's clothing", label: "Women's Clothing" }
  ];

  const handleFilterToggle = (categoryId) => {
    console.log('🏷️ Toggling filter:', categoryId);
    const newFilters = selectedFilters.includes(categoryId)
      ? selectedFilters.filter(c => c !== categoryId)
      : [...selectedFilters, categoryId];
    
    console.log('Updated filters:', newFilters);
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (type, value) => {
    const newRange = type === 'min' 
      ? [parseInt(value) || 0, priceRange[1]] 
      : [priceRange[0], parseInt(value) || 1000];
    
    console.log('Price range updated:', newRange);
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  const handleClearFilters = () => {
    console.log('🗑️ Clearing all filters');
    setSelectedFilters([]);
    setPriceRange([0, 1000]);
    onFilterChange([]);
    onPriceChange([0, 1000]);
  };

  return (
    <aside className="filters-sidebar" aria-label="Filters">
      <div className="filters-header">
        <h2 className="filters-title">Filters</h2>
        {(selectedFilters.length > 0 || priceRange[0] > 0 || priceRange[1] < 1000) && (
          <button className="clear-filters-btn" onClick={handleClearFilters}>
            Clear All
          </button>
        )}
      </div>

      {/* Categories Filter */}
      <div className="filter-group">
        <button
          className="filter-group-header"
          onClick={() => setOpenCategories(!openCategories)}
          aria-expanded={openCategories}
        >
          <span className="filter-group-title">CATEGORIES</span>
          <span className={`expand-icon ${openCategories ? 'open' : ''}`}>
            ▼
          </span>
        </button>
        {openCategories && (
          <div className="filter-options">
            {categories.map((category) => (
              <label key={category.id} className="filter-option">
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(category.id)}
                  onChange={() => handleFilterToggle(category.id)}
                  aria-label={`Filter by ${category.label}`}
                />
                <span className="checkbox-custom"></span>
                <span className="filter-label">
                  {category.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <button
          className="filter-group-header"
          onClick={() => setOpenPrice(!openPrice)}
          aria-expanded={openPrice}
        >
          <span className="filter-group-title">PRICE</span>
          <span className={`expand-icon ${openPrice ? 'open' : ''}`}>
            ▼
          </span>
        </button>
        {openPrice && (
          <div className="filter-price">
            <div className="price-inputs">
              <div className="price-input-group">
                <label htmlFor="price-min">Min</label>
                <input
                  id="price-min"
                  type="number"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  placeholder="0"
                />
              </div>
              <span className="price-separator">-</span>
              <div className="price-input-group">
                <label htmlFor="price-max">Max</label>
                <input
                  id="price-max"
                  type="number"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  placeholder="1000"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RATINGS - Placeholder */}
      <div className="filter-group">
        <button
          className="filter-group-header"
          onClick={() => {}}
          aria-expanded="false"
        >
          <span className="filter-group-title">RATINGS</span>
          <span className="expand-icon">▼</span>
        </button>
      </div>

      {/* DISCOUNT - Placeholder */}
      <div className="filter-group">
        <button
          className="filter-group-header"
          onClick={() => {}}
          aria-expanded="false"
        >
          <span className="filter-group-title">DISCOUNT</span>
          <span className="expand-icon">▼</span>
        </button>
      </div>
    </aside>
  );
};

export default Filters;
