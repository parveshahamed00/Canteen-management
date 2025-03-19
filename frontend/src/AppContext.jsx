/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Load user data from localStorage when the app starts
  const storedUser = localStorage.getItem("loginCredentials");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

  // Update localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("loginCredentials", JSON.stringify(user));
    } else {
      localStorage.removeItem("loginCredentials"); // Remove if user is null (logout)
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
