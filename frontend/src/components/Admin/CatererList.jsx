/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
const CatererList = () => {
  const [caterers, setCaterers] = useState([]);

  // Fetch caterers from the backend
  useEffect(() => {
    const fetchCaterers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/dashboard/catererList"
        );
        setCaterers(response.data);
      } catch (error) {
                toast.error("Failed to fetch caterers.");

        console.error("Error fetching caterers:", error);
      }
    };

    fetchCaterers();
  }, []);

  // Handle delete caterer
  const handleDelete = async (catererId) => {
    try {
      await axios.delete(`http://localhost:3001/api/caterers/${catererId}`);
      setCaterers(
        caterers.filter((caterer) => caterer.caterer_id !== catererId)
      );
      toast.success("Caterer deleted successfully.");
    } catch (error) {
      console.error("Error deleting caterer:", error);
      toast.error("Failed to delete caterer.");
    }
  };

  return (
    <div className="flex">
      <ToastContainer />
      <Sidebar></Sidebar>
      <div className="container mx-auto p-4">
        <h1 className=" font-mono text-3xl mb-4 text-center">Caterers List</h1>
        <ul className="space-y-4">
          {caterers.map((caterer) => (
            <li
              key={caterer.caterer_id}
              className="flex justify-between items-center p-4 bg-white rounded shadow"
            >
              <div>
                <p className="font-semibold">ID: {caterer.caterer_id}</p>
                <p>Name: {caterer.name}</p>
              </div>
              <button
                onClick={() => handleDelete(caterer.caterer_id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CatererList;
