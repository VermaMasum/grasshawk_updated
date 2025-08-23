import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/GlobalStyles.css";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Success from "./components/success";
import Cancel from "./components/cancel";
import About from "./components/About";
import MoleTrapInstructions from "./components/MoleTrapInstructions";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);
      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCartItems((prev) => prev.filter((item) => item.name !== productName));
  };

  const updateQuantity = (productName, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <Router>
      <Navbar cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)} />
      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <About /> */}
              {/* <MoleTrapInstructions />
              <Pricing />
              <Products addToCart={addToCart} />
              <Cart
                items={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
              /> */}
              {/* <Contact /> */}
            </>
          }
        />
        {/* Other routes */}
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route
          path="/product-page"
          element={
            <ProductPage
              addToCart={addToCart}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        />

        {/* <Route
          path="/Cart"
          element={
            <Cart
              items={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        /> */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/checkout" element={<Checkout />} />*/}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructions" element={<MoleTrapInstructions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
