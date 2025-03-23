import React, { useState } from 'react';
import axios from 'axios';
import { Info, ArrowLeft } from 'lucide-react';
import '../styles/forms.css';
import '../styles/recommendation.css';
import { getCropInfo } from '../data/cropInfo';
import CropInfoPanel from './CropInfoPanel';
import { useNavigate } from "react-router-dom";

const CropRecommendation = () => {
  const [inputs, setInputs] = useState({
    N: '',
    P: '',
    K: '',
    Temperature: '',
    Humidity: '',
    ph: '',
    Rainfall: '',
  });
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
  
  const navigate = useNavigate();

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
        'http://localhost:5000/recommend',
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

  const cropInfo = recommendation ? getCropInfo(recommendation) : null;

  return (
    <div className="crop-container">
      <div className="overlay">
      <button
        className="back-button-box"
        onClick={() => navigate('/Home')}
      >
      <ArrowLeft size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
      Back to Home
      </button>

        <div className="card" style={{ maxWidth: '48rem' }}>
          <h1>Smart Crop Recommendation</h1>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="form-grid">
            {/* Form Inputs */}
            <div className="form-group">
              <label className="form-label">Nitrogen (N)</label>
              <input
                type="number"
                name="N"
                className="form-input"
                value={inputs.N}
                onChange={handleChange}
                required
                min="0"
                max="100"
                step="0.01"
                placeholder='Enter Nitrogen value'
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phosphorus (P)</label>
              <input
                type="number"
                name="P"
                className="form-input"
                value={inputs.P}
                onChange={handleChange}
                required
                min="0"
                max="100"
                step="0.01"
                placeholder='Enter Phosphorus value'
              />
            </div>

            <div className="form-group">
              <label className="form-label">Potassium (K)</label>
              <input
                type="number"
                name="K"
                className="form-input"
                value={inputs.K}
                onChange={handleChange}
                required
                min="0"
                max="100"
                step="0.01"
                placeholder="Enter Potassium value"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Temperature (°C)</label>
              <input
                type="number"
                name="Temperature"
                className="form-input"
                value={inputs.Temperature}
                onChange={handleChange}
                required
                min="0"
                max="60"
                step="0.1"
                placeholder="Enter Temperature value"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Humidity (%)</label>
              <input
                type="number"
                name="Humidity"
                className="form-input"
                value={inputs.Humidity}
                onChange={handleChange}
                required
                min="0"
                max="100"
                step="0.1"
                placeholder="Enter Humidity value"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Soil pH</label>
              <input
                type="number"
                name="ph"
                className="form-input"
                value={inputs.ph}
                onChange={handleChange}
                required
                min="0"
                max="14"
                step="0.1"
                placeholder="Enter Soil pH value"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Rainfall (mm)</label>
              <input
                type="number"
                name="Rainfall"
                className="form-input"
                value={inputs.Rainfall}
                onChange={handleChange}
                required
                min="0"
                step="0.1"
                placeholder="Enter Rainfall value"
              />
            </div>

            <button
              type="submit"
              className="button full-width"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Get Recommendation'}
            </button>
          </form>

          {recommendation && (
            <div className="recommendation-card">
              <h3 className="recommendation-title">Recommended Crop</h3>
              <p className="recommendation-crop">{recommendation}</p>
              <p className="recommendation-description">
                Based on your soil conditions and environmental factors, this crop is most suitable for your farm.
              </p>
              <button 
                className="info-button"
                onClick={() => setIsInfoPanelOpen(true)}
              >
                <Info size={16} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
                Learn More About This Crop
              </button>
            </div>
          )}
        </div>
      </div>

      <CropInfoPanel
        cropInfo={cropInfo}
        isOpen={isInfoPanelOpen}
        onClose={() => setIsInfoPanelOpen(false)}
      />
    </div>
  );
};

export default CropRecommendation;
