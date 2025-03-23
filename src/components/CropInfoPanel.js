import React from 'react';
import { X } from 'lucide-react';
import '../styles/cropInfo.css';

const CropInfoPanel = ({ cropInfo, isOpen, onClose }) => {
  if (!cropInfo) return null;

  return (
    <div className={`crop-info-panel ${isOpen ? 'open' : ''}`}>
      <button className="crop-info-close" onClick={onClose}>
        <X size={24} />
      </button>

      <h2>{cropInfo.name}</h2>
      
      <div className="crop-info-section">
        <h4>Description</h4>
        <p>{cropInfo.description}</p>
      </div>

      <div className="crop-info-section">
        <h4>Growth Period</h4>
        <p>{cropInfo.growthPeriod}</p>
      </div>

      <div className="crop-info-section">
        <h4>Soil Requirements</h4>
        <p>{cropInfo.soilRequirements}</p>
      </div>

      <div className="crop-info-section">
        <h4>Watering Needs</h4>
        <p>{cropInfo.wateringNeeds}</p>
      </div>

      <div className="crop-info-section">
        <h4>Climate</h4>
        <p>{cropInfo.climate}</p>
      </div>

      <div className="crop-info-section">
        <h4>Harvesting</h4>
        <p>{cropInfo.harvesting}</p>
      </div>

      <div className="crop-info-section">
        <h4>Common Pests</h4>
        <p>{cropInfo.pests}</p>
      </div>

      <div className="crop-info-section">
        <h4>Common Diseases</h4>
        <p>{cropInfo.diseases}</p>
      </div>

      <div className="crop-info-section">
        <h4>Storage</h4>
        <p>{cropInfo.storage}</p>
      </div>
    </div>
  );
};

export default CropInfoPanel;
