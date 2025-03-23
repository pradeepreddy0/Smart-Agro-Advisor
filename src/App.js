import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from "./components/Home";
import CropRecommendation from './components/CropRecommendation';
import FertilizerRecommendation from './components/FertilizerRecommendation';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/croprecommendation" element={<CropRecommendation />} />
                <Route path="fertilizerrecommendation" element={<FertilizerRecommendation/>}/>
            </Routes>
        </Router>
    );
};

export default App;