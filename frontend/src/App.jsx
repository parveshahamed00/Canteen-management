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
import AuthPage from "./components/AuthPage";
import SignUp from "./components/SignUp";
function App() {
  // TODO: create user login uing rollnumber and password
  return (
    <div>
      <Routes>
      <Route path="/" element={<AuthPage/>} />
      <Route path="/signup" element={<SignUp/>} />

        {/* Admin Route (Login) */}
        <Route path="/admin" element={<LoginPage />} />
        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard/sales" element={<Sales />} />
          <Route path="/admin/dashboard/caterer" element={<Caterer />} />
          <Route path="/admin/dashboard/items" element={<AddFoodItem />} />
          <Route path="/admin/dashboard/addCaterer" element={<AddCaterer />} />
          <Route
            path="/admin/dashboard/catererList"
            element={<CatererList></CatererList>}
          />
        </Route>
        {/* 404 Error Page */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
