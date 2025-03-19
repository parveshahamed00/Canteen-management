/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart } = useContext(AppContext);

  const handleRemove = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto my-16 p-5 bg-white">
        <div><img src="logo.png" alt="logo" className="logo" /></div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full border-collapse border border-red-500">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.quantity}</td>
                  <td className="p-2">₹ {item.price}</td>
                  <td className="p-2">₹ {item.price * item.quantity}</td>
                  <td className="p-2">
                    <button
                      className="text-red-500"
                      onClick={() => handleRemove(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="mt-6 text-xl font-bold text-blue-700">Total: ₹ {totalPrice}</h2>
          <div className="text-center"> <button className="mt-4 bg-green-600  text-white px-4 py-2 rounded">
            Proceed to Checkout ✅
          </button></div>
         
        </>
      )}
      <Link to="/home" className="block mt-4 text-blue-500 text-center"><button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded">Continue Shopping 🍟</button> </Link>
    </div>
  );
};

export default CartPage;
