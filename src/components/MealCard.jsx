
import { useDispatch } from "react-redux";
import { toggleMeal, setMealPeople } from "../redux/plannerSlice";

function MealCard({ meal, mealPeople }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h3>{meal.name}</h3>
      <p>Price per person: ${meal.price}</p>

      <label>
        <input
          type="checkbox"
          checked={meal.selected}
          onChange={() => dispatch(toggleMeal(meal.id))}
        />
        Select meal
      </label>

      {meal.selected && (
        <div>
          <label>Number of people: </label>
          <input
            type="number"
            min="0"
            value={mealPeople}
            onChange={(e) =>
              dispatch(setMealPeople(Number(e.target.value)))
            }
          />
        </div>
      )}
    </div>
  );
}

export default MealCard;
