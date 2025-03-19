/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import { FaSignOutAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../AppContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, addToCart, cart } = useContext(AppContext);
  const backendURL = "http://localhost:3000";
  const [foodItems, setFoodItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/homepage");
        setFoodItems(response.data.data);
      } catch (error) {
        toast.error("Something went wrong ⚠️");
      }
    };

    fetchCaterers();
  }, []);

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prev) => ({ ...prev, [itemId]: quantity }));
  };

  const handleAddToCart = (item) => {
    const quantity = parseInt(quantities[item.id]) || 1;
    addToCart(item, quantity);
    toast.success(`${quantity} ${item.name} added to cart!`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("loginCredentials");
    navigate("/login");
  };

  // Calculate total quantity of items in the cart
  const totalCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <ToastContainer /> {/* Ensure this is included */}
      <nav className="flex justify-between items-center p-4 bg-white">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2 logo" />
        </div>
        <div className="flex items-center space-x-4">
          <FaUser />
          <span>{user?.name}</span>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="cursor-pointer text-green-600 text-xl" />
            {totalCartQuantity > 0 && (
              <span className="absolute border-red-600 border-2 -top-3 -right-2 bg-transparent text-red-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-extrabold">
                {totalCartQuantity}
              </span>
            )}
          </Link>
          <button onClick={handleLogout}>
            <FaSignOutAlt />
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-3 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <div key={item.id} className="border bg-white rounded-lg p-4 shadow-md">
              <img
                src={`${backendURL}/uploads/${item.image_path}`}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h5 className="text-xl font-semibold mt-2">
                {item.name}{" "}
                <span className="text-green-600 ml-2">₹ {item.price}</span>
              </h5>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <label className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="border rounded px-2 py-1 w-16"
                  />
                </div>
                <button
                  className="bg-green-700 text-white px-4 py-2 rounded"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
