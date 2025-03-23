import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css"; // Optional CSS for styling

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data (if any) and redirect to login
    localStorage.removeItem("authToken"); // Example: Clearing token
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Smart Agri Assistant</div>
      <div className="navbar-links">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
