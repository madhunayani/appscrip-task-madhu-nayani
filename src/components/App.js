import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Filters from './Filters';
import ProductGrid from './ProductGrid';
import Footer from './Footer';
import '../styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products from Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message || 'Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on categories, price, and search
  const filterProducts = useCallback(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by price range
    filtered = filtered.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategories, priceRange, searchQuery]);

  // Apply filters whenever dependencies change
  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  // Handle filter changes
  const handleFilterChange = (categories) => {
    setSelectedCategories(categories);
  };

  // Handle price range changes
  const handlePriceChange = (range) => {
    setPriceRange(range);
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Show toast notification (optional)
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} cartCount={cartItems.length} />
      
      <main className="main-content">
        <div className="plp-container">
          <Filters 
            onFilterChange={handleFilterChange}
            onPriceChange={handlePriceChange}
          />
          <ProductGrid 
            products={filteredProducts}
            loading={loading}
            error={error}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
