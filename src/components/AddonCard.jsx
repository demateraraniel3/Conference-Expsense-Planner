
import { useDispatch } from "react-redux";
import { updateAddonQuantity } from "../redux/plannerSlice";

function AddonCard({ addon }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h3>{addon.name}</h3>
      <p>Price: ${addon.price.toLocaleString()}</p>

      <button
        onClick={() =>
          dispatch(
            updateAddonQuantity({
              id: addon.id,
              quantity: -1,
            })
          )
        }
      >
        -
      </button>

      <span>{addon.quantity}</span>

      <button
        onClick={() =>
          dispatch(
            updateAddonQuantity({
              id: addon.id,
              quantity: 1,
            })
          )
        }
      >
        +
      </button>
    </div>
  );
}

export default AddonCard;
