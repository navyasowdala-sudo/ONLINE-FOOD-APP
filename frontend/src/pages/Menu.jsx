import React from "react";
import Navbar from "../components/Navbar";

const Menu = () => {
  const foods = [
    {
      id: 1,
      name: "Burger",
      price: 120,
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Food Menu</h1>

        {foods.map((food) => (
          <div key={food.id} className="food-card">
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>

            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;