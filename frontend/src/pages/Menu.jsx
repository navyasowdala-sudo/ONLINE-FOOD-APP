import { useEffect, useState } from "react";
import axios from "axios";

import FoodCard from "../components/FoodCard";

const Menu = () => {

  const [foods, setFoods] = useState([]);

  useEffect(() => {

    fetchFoods();

  }, []);

  const fetchFoods = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/foods"
      );

      setFoods(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="menu-container">

      <h2>Food Menu</h2>

      <div className="food-grid">

        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}

      </div>
    </div>
  );
};

export default Menu;