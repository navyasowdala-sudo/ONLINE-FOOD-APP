import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  return (
    <div className="food-card">

      <img src={food.image} alt={food.title} />

      <h3>{food.title}</h3>

      <p>₹{food.price}</p>

      <Link to={`/food/${food._id}`}>
        View Details
      </Link>

    </div>
  );
};

export default FoodCard;