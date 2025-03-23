import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component
import "../styles/Home.css"; // Optional CSS for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to the Smart Agro-Advisors</h1>
        <div className="card-container">
          <div className="card" onClick={() => navigate("/croprecommendation")}>
            <h3>Crop Recommendation</h3>
            <p>Get tailored crop suggestions based on your soil and weather data.</p>
          </div>
          <div className="card" onClick={() => navigate("/fertilizerrecommendation")}>
            <h3>Fertilizer Recommendation</h3>
            <p>Find the best fertilizers and quantities for your crops.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
