/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, parsePath } from "react-router-dom";
import LoginPage from "./components/Admin/LoginPage";
import Error404 from "./components/Error404";
import Caterer from "./components/Admin/Caterer";
import Items from "./components/Admin/Items";
import Sales from "./components/Admin/Sales";
import ProtectedRoute from "./components/Admin/ProtectedRoute"; // Import the ProtectedRoute component
import AddCaterer from "./components/Admin/AddCaterer";
import CatererList from "./components/Admin/CatererList";

function App() {
  // TODO: create student auth
  return (    
    <div>
      <Routes>
        {/* Public Route (Login) */}
        <Route path="/admin" element={<LoginPage />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/dashboard/sales" element={<Sales />} />
          <Route path="/admin/dashboard/caterer" element={<Caterer />} />
          <Route path="/admin/dashboard/items" element={<Items />} />
          <Route path="/admin/dashboard/addCaterer" element={<AddCaterer/>} />
          <Route path="/admin/dashboard/catererList" element={<CatererList></CatererList>} />

        </Route>
        {/* 404 Error Page */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;

