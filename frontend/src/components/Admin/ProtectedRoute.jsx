import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check for token
  const userRole = localStorage.getItem("role");
console.log(token,userRole);

  // If token exists, allow access to the nested routes
  // Otherwise, redirect to the login page
  return token ? <Outlet />:<Navigate to="/admin" />;
};

export default ProtectedRoute;