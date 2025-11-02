import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ onSearch, cartCount = 0 }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Real-time search as user types
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('🔍 Search form submitted with query:', searchQuery);
    onSearch(searchQuery);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/" aria-label="Appscrip Home">
            SHOP.CO
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#shop" className="nav-link">SHOP</a>
          <a href="#women" className="nav-link">WOMEN</a>
          <a href="#men" className="nav-link">MEN</a>
          <a href="#kids" className="nav-link">KIDS</a>
          <a href="#about" className="nav-link">ABOUT US</a>
          <a href="#contact" className="nav-link">CONTACT US</a>
        </nav>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search for products"
            className="search-input"
          />
          <button type="submit" className="search-btn" aria-label="Submit search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.5 14.5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>

        {/* Icons Section */}
        <div className="header-icons">
          {/* Heart/Wishlist Icon */}
          <button className="icon-btn wishlist-btn" aria-label="Wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="icon-btn cart-btn" aria-label={`Shopping cart with ${cartCount} items`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="21" r="1" fill="currentColor"/>
              <circle cx="20" cy="21" r="1" fill="currentColor"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* User Account Icon */}
          <button className="icon-btn user-btn" aria-label="User account">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
