/* eslint-disable no-unused-vars */
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState,useEffect} from "react";
import { FaSignOutAlt, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
  
  const [quantities, setQuantities] = useState({});
  const username = "John Doe";
const [foodsItems,setFoodItems]=useState([])
  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/homepage"
        );
        console.log('Fetched Food Items:', response.data.data); // Log the response
        setFoodItems(response.data.data);
      } catch (error) {
        toast.error("No caterer found ⚠️");
        console.error("Error fetching caterers:", error);
      }
    };

    fetchCaterers();
  }, []);

  const foodItems = [
    {
      id: 1,
      name: "Pizza",
      description: "Delicious cheese pizza",
      image: "pizza.jpg",
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy burger with fries",
      image: "burger.jpg",
    },
    // Add more items as needed
  ];

  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const handleAddToCart = (itemId) => {
    const quantity = quantities[itemId] || 1;
    console.log(`Added ${quantity} of item ${itemId} to cart.`);
  };
  const handleLogout = () => {
    
    // Clear the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // Redirect to the login page

    navigate("/login");
  };
  return (
    <div>
      <nav className="flex justify-between items-center p-4  bg-green-600">
        <div className="flex items-center ">
          <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          <span className="text-lg font-bold"></span>
        </div>
        <div className="flex items-center space-x-4">
          <FaUser></FaUser>
          <span>{username}</span>
          <FaShoppingCart></FaShoppingCart>
        <button onClick={handleLogout}>  <FaSignOutAlt></FaSignOutAlt></button>
        </div>
      </nav>

      <div className="container mx-auto p-3 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {foodItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h5 className="text-xl font-semibold mt-2">
                {item.name} <span style={{ color: "green",fontSize:"15px", marginLeft:"6px",fontStyle:"italic"}}>₹ 50</span>
              </h5>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <label className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    min="1"
                    className="border rounded px-2 py-1 w-16"
                  />
                </div>
                <button
                  className="bg-green-700 text-white px-4 py-2 rounded"
                  onClick={() => handleAddToCart(item.id)}
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

export default App;
