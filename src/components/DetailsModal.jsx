
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DetailsModal() {
  const [isOpen, setIsOpen] = useState(false);

  const { rooms, addons, meals, mealPeople } = useSelector(
    (state) => state.planner
  );

  useEffect(() => {
    const openModal = () => setIsOpen(true);

    window.addEventListener("show-details", openModal);

    return () => {
      window.removeEventListener("show-details", openModal);
    };
  }, []);

  const selectedItems = [
    ...rooms
      .filter((room) => room.quantity > 0)
      .map((room) => ({
        type: "Room",
        name: room.name,
        price: room.price,
        quantity: room.quantity,
        subtotal: room.price * room.quantity,
      })),

    ...addons
      .filter((addon) => addon.quantity > 0)
      .map((addon) => ({
        type: "Add-on",
        name: addon.name,
        price: addon.price,
        quantity: addon.quantity,
        subtotal: addon.price * addon.quantity,
      })),

    ...meals
      .filter((meal) => meal.selected && mealPeople > 0)
      .map((meal) => ({
        type: "Meal",
        name: meal.name,
        price: meal.price,
        quantity: mealPeople,
        subtotal: meal.price * mealPeople,
      })),
  ];

  const totalCost = selectedItems.reduce(
    (total, item) => total + item.subtotal,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="details-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-button"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <h2>Conference Expense Details</h2>

        {selectedItems.length === 0 ? (
          <p>No items selected yet.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Selection Type</th>
                  <th>Unit Cost</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {selectedItems.map((item, index) => (
                  <tr key={`${item.type}-${item.name}-${index}`}>
                    <td>{item.name} ({item.type})</td>
                    <td>${item.price.toLocaleString()}</td>
                    <td>{item.quantity}</td>
                    <td>${item.subtotal.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <h3 className="total-cost">
          Total Cost: ${totalCost.toLocaleString()}
        </h3>

        <button
          className="done-button"
          onClick={() => setIsOpen(false)}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default DetailsModal;
