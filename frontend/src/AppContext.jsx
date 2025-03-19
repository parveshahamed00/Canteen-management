/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedUser = localStorage.getItem("loginCredentials");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  // Retrieve cart items from localStorage
  const storedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(storedCart ? JSON.parse(storedCart) : []);

  // Save user to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("loginCredentials", JSON.stringify(user));
    } else {
      localStorage.removeItem("loginCredentials");
    }
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to Add Items to Cart
  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  return (
    <AppContext.Provider value={{ user, setUser, cart, setCart, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};
