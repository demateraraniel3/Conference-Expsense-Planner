
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import AddonCard from "../components/AddonCard";
import MealCard from "../components/MealCard";
import DetailsModal from "../components/DetailsModal";
import Footer from "../components/Footer";
import "./PlannerPage.css";

function PlannerPage() {
  const { rooms, addons, meals, mealPeople } = useSelector(
    (state) => state.planner
  );

  return (
    <div className="planner-page">
      <DetailsModal />

      {/* Navigation Bar - Only Once */}
      <Navbar />

      <main className="planner-container">
        <header className="planner-header">
          <h1>Conference Expense Planner</h1>
          <p>
            Plan your perfect conference by selecting rooms,
            additional services, and meals.
          </p>
        </header>

        <section className="planner-section">
          <h2>Room Selection</h2>
          <p className="section-description">
            Choose the rooms that suit your conference.
          </p>

          <div className="product-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </section>

        <section className="planner-section">
          <h2>Additional Services</h2>
          <p className="section-description">
            Select the equipment and services you need.
          </p>

          <div className="product-grid">
            {addons.map((addon) => (
              <AddonCard key={addon.id} addon={addon} />
            ))}
          </div>
        </section>

        <section className="planner-section">
          <h2>Meal Selection</h2>
          <p className="section-description">
            Choose meals for your conference attendees.
          </p>

          <div className="product-grid">
            {meals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
                mealPeople={mealPeople}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PlannerPage;
