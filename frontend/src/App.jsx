/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, parsePath } from "react-router-dom";
import LoginPage from "./components/Admin/LoginPage";
import Error404 from "./components/Error404";
import Caterer from "./components/Admin/Caterer";
import Sales from "./components/Admin/Sales";
import ProtectedRoute from "./components/Admin/ProtectedRoute"; // Import the ProtectedRoute component
import AddCaterer from "./components/Admin/AddCaterer";
import CatererList from "./components/Admin/CatererList";
import AddFoodItem from "./components/Admin/AddFoodItem";
import AuthPage from "./components/User/AuthPage";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/Login";
import HomePage from "./components/User/HomePage";
function App() {
  // TODO: create user login uing rollnumber and password
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        {/* user */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />
        
        {/* Admin Route (Login) */}
        <Route path="/admin" element={<LoginPage />} />
        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard/sales" element={<Sales />} />
          <Route path="/admin/dashboard/caterer" element={<Caterer />} />
          <Route path="/admin/dashboard/items" element={<AddFoodItem />} />
          <Route path="/admin/dashboard/addCaterer" element={<AddCaterer />} />
          <Route path="/admin/dashboard/catererList" element={<CatererList />} />
        </Route>
        {/* 404 Error Page */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
