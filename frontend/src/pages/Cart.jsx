import React from "react";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Cart Page</h1>

        <h3>Burger x2</h3>
        <p>Total: ₹240</p>

        <button>Checkout</button>
      </div>
    </>
  );
};

export default Cart;