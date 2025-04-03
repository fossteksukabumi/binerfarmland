import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Aboutus';
import ShopPage from './pages/Shop';
import Header from './components/Header/Header';
import Checkout from './pages/Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [shopOpen, setShopOpen] = useState(false);

  const addToCart = (item, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
  };

  // Save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <Header 
        cartItems={cartItems} 
        shopOpen={shopOpen} 
        setShopOpen={setShopOpen} 
        removeFromCart={removeFromCart} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<ShopPage addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
};

export default App;