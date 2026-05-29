import { useEffect, useState } from "react";
import axios from "axios";

import FoodCard from "../components/FoodCard";

function Menu() {

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch foods when page loads
  useEffect(() => {
    fetchFoods();
  }, []);

  // Fetch API
  const fetchFoods = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/foods"
      );

      setFoods(res.data);

    } catch (error) {

      console.log(
        "Error fetching foods:",
        error
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="menu-container">

      <h1 className="menu-title">
        Food Menu
      </h1>

      {loading ? (

        <h2>Loading...</h2>

      ) : foods.length === 0 ? (

        <h2>No Foods Available</h2>

      ) : (

        <div className="food-grid">

          {foods.map((food) => (

            <FoodCard
              key={food._id}
              food={food}
            />

          ))}

        </div>
      )}

    </div>
  );
}

export default Menu;