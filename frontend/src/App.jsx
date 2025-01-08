/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/Admin/LoginPage";
import Error404 from "./components/pages/Error404";
import Caterer from "./components/pages/Admin/Caterer";
import Items from "./components/pages/Admin/Items";
import Sales from "./components/pages/Admin/Sales";
import Sidebar from "./components/pages/Admin/Sidebar";
function App() {
  return (
    <div>
      <Routes>

        {/* TODO: setup the remaining admin's dashboard route */}
        <Route path="/admin" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/admin/dashboard/sales"
          element={<Sales></Sales>}
        ></Route>
          <Route
          path="/admin/dashboard/caterer"
          element={<Caterer></Caterer>}
        ></Route>
          <Route
          path="/admin/dashboard/items"
          element={<Items></Items>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
