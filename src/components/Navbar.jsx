
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    window.dispatchEvent(new Event("show-details"));
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>BudgetEase Solutions</h2>
        <span>Conference Expense Planner</span>
      </div>

      <div className="navbar-buttons">
        <button
          type="button"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          type="button"
          onClick={handleShowDetails}
        >
          Show Details
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
