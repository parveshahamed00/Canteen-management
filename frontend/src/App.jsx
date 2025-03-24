import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/Admin/LoginPage";
import Error404 from "./components/Error404";
import Caterer from "./components/Admin/Caterer";
import Sales from "./components/Admin/Sales";
import { AdminProtectedRoute, UserProtectedRoute } from "./components/ProtectedRoute";
import AddCaterer from "./components/Admin/AddCaterer";
import CatererList from "./components/Admin/CatererList";
import AddFoodItem from "./components/Admin/AddFoodItem";
import AuthPage from "./components/User/AuthPage";
import SignUp from "./components/User/SignUp";
import Login from "./components/User/Login";
import HomePage from "./components/User/HomePage";
import CartPage from "./components/User/CartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthPage />} />

        {/* User Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage/>} />


        {/* Protected User Route */}
        <Route element={<UserProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin" element={<LoginPage />} />

        {/* Protected Admin Routes */}
        <Route element={<AdminProtectedRoute />}>
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
