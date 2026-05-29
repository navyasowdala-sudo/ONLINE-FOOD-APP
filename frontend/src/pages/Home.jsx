import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Welcome to Food Ordering App</h1>
        <p>Order your favorite food online.</p>
      </div>
    </>
  );
};

export default Home;