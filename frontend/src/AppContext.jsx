import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const storedUser = localStorage.getItem("loginCredentials");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  // Function to get cart storage key for each user
  const getCartKey = (user) => `cart_${user ? user.id : "guest"}`;

  // Initialize cart as an empty array
  const [cart, setCart] = useState([]);

  // Function to load cart based on user
  const loadCart = (user) => {
    const storedCart = localStorage.getItem(getCartKey(user));
    return storedCart ? JSON.parse(storedCart) : [];
  };

  // Load cart whenever user logs in or out
  useEffect(() => {
    setCart(loadCart(user));
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(getCartKey(user), JSON.stringify(cart));
    }
  }, [cart, user]);

  // Function to Add Items to Cart
  const addToCart = (item, quantity) => {
    if (!user) {
      console.warn("User is not logged in. Cannot add items to the cart.");
      return;
    }

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
