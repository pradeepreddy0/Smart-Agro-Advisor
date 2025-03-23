import React, { useState } from 'react';
import axios from 'axios';
// import { Info } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import '../styles/forms.css';
import '../styles/recommendation.css';
// import { getCropInfo } from '../data/cropInfo';
// import CropInfoPanel from './CropInfoPanel';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const [inputs, setInputs] = useState({
    Temperature: '',
    Humidity: '',
    Moisture: '',
    Soil_Type: '0',
    Crop_Type: '0',
    Nitrogen: '',
    Potassium: '',
    Phosphorous: '',
  });
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
//   const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log(inputs);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/predict',
        inputs,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRecommendation(response.data.recommendation);
    } catch (err) {
      setError(err.response?.status === 401
        ? 'Please log in again to continue.'
        : 'Error getting recommendation. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const navigate=useNavigate();

//   const cropInfo = recommendation ? getCropInfo(recommendation) : null;

  return (
    <div className="fertilizer-container">
      <div className="overlay">
      <button
        className="back-button-box"
        onClick={() => navigate('/Home')}
      >
      <ArrowLeft size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
      Back to Home
      </button>
        <div className="card" style={{ maxWidth: '48rem' }}>
          <h1>Smart Fertilizer Recommendation</h1>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="form-grid">
            
            <div className="form-group">
              <label className="form-label">Temperature</label>
              <input
                type="number"
                className="form-input"
                name="Temperature"
                id="temp"
                value={inputs.Temperature}
                onChange={handleChange}
                required
                placeholder="Enter Temperature"
              />
            </div>

            {/* Humidity */}
            <div className="form-group">
              <label className="form-label">Humidity</label>
              <input
                type="number"
                className="form-input"
                name="Humidity"
                id="humid"
                value={inputs.Humidity}
                onChange={handleChange}
                required
                placeholder="Enter Humidity"
              />
            </div>

            {/* Moisture */}
            <div className="form-group">
              <label className="form-label">Moisture</label>
              <input
                type="number"
                className="form-input"
                name="Moisture"
                id="mois"
                value={inputs.Moisture}
                onChange={handleChange}
                required
                placeholder="Enter Moisture"
              />
            </div>

            {/* Soil Type */}
            <div className="form-group">
              <label className="form-label">Soil Type</label>
              <div className="custom_select">
                <select
                  name="Soil_Type"
                  id="soil"
                  className="form-input"
                  value={inputs.Soil_Type}
                  onChange={handleChange}
                  required
                >
                  <option value="0">Black</option>
                  <option value="1">Clayey</option>
                  <option value="2">Loamy</option>
                  <option value="3">Red</option>
                  <option value="4">Sandy</option>
                </select>
              </div>
            </div>

            {/* Crop Type */}
            <div className="form-group">
              <label className="form-label">Crop Type</label>
              <div className="custom_select">
                <select
                  name="Crop_Type"
                  id="crop"
                  className="form-input"
                  value={inputs.Crop_Type}
                  onChange={handleChange}
                  required
                >
                  <option value="0">Barley</option>
                  <option value="1">Cotton</option>
                  <option value="2">Ground Nuts</option>
                  <option value="3">Maize</option>
                  <option value="4">Millets</option>
                  <option value="5">Oil Seeds</option>
                  <option value="6">Paddy</option>
                  <option value="7">Pulses</option>
                  <option value="8">Sugarcane</option>
                  <option value="9">Tobacco</option>
                  <option value="10">Wheat</option>
                  <option value="11">Coffee</option>
                  <option value="12">Kidney Beans</option>
                  <option value="13">Orange</option>
                  <option value="14">Pomegranate</option>
                  <option value="15">Rice</option>
                  <option value="16">Watermelon</option>
                </select>
              </div>
            </div>

            {/* Nitrogen */}
            <div className="form-group">
              <label className="form-label">Nitrogen</label>
              <input
                type="number"
                className="form-input"
                name="Nitrogen"
                id="nitro"
                value={inputs.Nitrogen}
                onChange={handleChange}
                required
                placeholder="Enter Nitrogen"
              />
            </div>

            {/* Potassium */}
            <div className="form-group">
              <label className="form-label">Potassium</label>
              <input
                type="number"
                className="form-input"
                name="Potassium"
                id="pota"
                value={inputs.Potassium}
                onChange={handleChange}
                required
                placeholder="Enter Potassium"
              />
            </div>

            {/* Phosphorous */}
            <div className="form-group">
              <label className="form-label">Phosphorous</label>
              <input
                type="number"
                className="form-input"
                name="Phosphorous"
                id="phos"
                value={inputs.Phosphorous}
                onChange={handleChange}
                required
                placeholder="Enter Phosphorous"
              />
            </div>

              <button type="submit"  className="button full-width" disabled={loading}>
                {loading ? 'Analyzing...' : 'Get Recommendation'}
              </button>
          </form>

          {recommendation && (
            <div className="recommendation-card">
              <h3 className="recommendation-title">Recommended Fertilizer</h3>
              <p className="recommendation-crop">{recommendation}</p>
              {/* <p className="recommendation-description">
                Based on your soil conditions and environmental factors, this crop is most suitable for your farm.
              </p>
              <button className="info-button" onClick={() => setIsInfoPanelOpen(true)}>
                <Info size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Learn More About This Crop
              </button> */}
            </div>
          )}
        </div>
      </div>

      {/* <CropInfoPanel
        cropInfo={cropInfo}
        isOpen={isInfoPanelOpen}
        onClose={() => setIsInfoPanelOpen(false)}
      /> */}
    </div>
  );
};

export default Home;
