import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './styles/App.css';

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
        console.log('🔄 Fetching products from Fake Store API...');
        setLoading(true);
        setError(null);

        const response = await fetch('https://fakestoreapi.com/products');
        console.log('📊 API Response Status:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Products fetched successfully:', data.length, 'products');

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error('❌ Error fetching products:', err);
        setError(err.message || 'Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on categories, price, and search
  const filterProducts = useCallback(() => {
    console.log('🔍 Applying filters...');
    console.log('Total products available:', products.length);
    console.log('Selected categories:', selectedCategories);
    console.log('Price range:', priceRange);
    console.log('Search query:', searchQuery);

    let filtered = [...products];

    // Filter by search query FIRST
    if (searchQuery && searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      console.log('🔎 Searching for:', query);
      
      filtered = filtered.filter(product => {
        const titleMatch = product.title.toLowerCase().includes(query);
        const descMatch = (product.description && product.description.toLowerCase().includes(query)) || false;
        const categoryMatch = (product.category && product.category.toLowerCase().includes(query)) || false;
        
        return titleMatch || descMatch || categoryMatch;
      });
      console.log('After search filter:', filtered.length, 'products');
    }

    // Then filter by category
    if (selectedCategories.length > 0) {
      console.log('🏷️ Filtering by categories:', selectedCategories);
      filtered = filtered.filter(product => {
        return selectedCategories.includes(product.category);
      });
      console.log('After category filter:', filtered.length, 'products');
    }

    // Finally filter by price range
    if (priceRange[0] > 0 || priceRange[1] < 1000) {
      console.log('💰 Filtering by price range:', priceRange);
      filtered = filtered.filter(product => {
        return product.price >= priceRange[0] && product.price <= priceRange[1];
      });
      console.log('After price filter:', filtered.length, 'products');
    }

    console.log('✅ Final filtered products:', filtered.length);
    setFilteredProducts(filtered);
  }, [products, selectedCategories, priceRange, searchQuery]);

  // Apply filters whenever dependencies change
  useEffect(() => {
    if (products.length > 0) {
      filterProducts();
    }
  }, [filterProducts, products.length]);

  // Handle filter changes
  const handleFilterChange = (categories) => {
    console.log('📌 Filter changed to:', categories);
    setSelectedCategories(categories);
  };

  // Handle price range changes
  const handlePriceChange = (range) => {
    console.log('💰 Price range changed to:', range);
    setPriceRange(range);
  };

  // Handle search
  const handleSearch = (query) => {
    console.log('🔎 Search query entered:', query);
    setSearchQuery(query);
  };

  // Handle add to cart - SIMPLIFIED (no modal)
  const handleAddToCart = (product) => {
    console.log('🛒 Adding to cart:', product.title);
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        console.log('📦 Product already in cart, increasing quantity');
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log('🆕 Adding new item to cart');
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Simple notification - no modal
    alert(`✅ ${product.title} added to cart!`);
  };

  return (
    <div className="app">
      <Header 
        onSearch={handleSearch} 
        cartCount={cartItems.length}
      />

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
