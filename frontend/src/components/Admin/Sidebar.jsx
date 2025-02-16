/* eslint-disable no-unused-vars */
import React from "react";
import { FaChartLine, FaPlusCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
    // Redirect to the login page
    navigate("/admin");
  };

  return (
    <div className="h-screen bg-green-500 w-44 text-white flex flex-col items-center p-4 space-y-6">
      <div className="text-lg font-logoFont font-extrabold mb-8 text-center">
        SAC SNACKS WALLET
      </div>

      {/* Navigation Icons and Text */}
      <div className="flex flex-col space-y-8">
        {/* Sales */}
        <Link to="/admin/dashboard/sales">
          <div className="flex flex-col items-center">
            <button className="p-3 rounded-full hover:bg-gray-700">
              <FaChartLine size={24} />
            </button>
            <span className="text-xs mt-2">Sales</span>
          </div>
        </Link>

        {/* Caterer */}
        <Link to="/admin/dashboard/caterer">
          <div className="flex flex-col items-center">
            <button className="p-3 rounded-full hover:bg-gray-700">
              <FaUser size={24} />
            </button>
            <span className="text-xs mt-2">Caterer</span>
          </div>
        </Link>

        {/* Add Items */}
        <Link to="/admin/dashboard/items">
          <div className="flex flex-col items-center">
            <button className="p-3 rounded-full hover:bg-gray-700">
              <FaPlusCircle size={24} />
            </button>
            <span className="text-xs mt-2">Add Items</span>
          </div>
        </Link>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Logout */}
      <div className="flex flex-col items-center">
        <button
          onClick={handleLogout}
          className="p-3 rounded-full hover:bg-gray-700"
        >
          <FaSignOutAlt size={24} />
        </button>
        <span className="text-xs mt-2">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
