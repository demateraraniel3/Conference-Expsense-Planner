
import { useDispatch } from "react-redux";
import { updateRoomQuantity } from "../redux/plannerSlice";

function RoomCard({ room }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h3>{room.name}</h3>
      <p>Capacity: {room.capacity} people</p>
      <p>Price: ${room.price.toLocaleString()}</p>

      <button
        onClick={() =>
          dispatch(
            updateRoomQuantity({
              id: room.id,
              quantity: -1,
            })
          )
        }
      >
        -
      </button>

      <span>{room.quantity}</span>

      <button
        onClick={() =>
          dispatch(
            updateRoomQuantity({
              id: room.id,
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

export default RoomCard;
