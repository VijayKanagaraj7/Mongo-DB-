import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        teamName: '',
        driverName: '',
        driverNumber: '',
        vehicleNumber: '',
        raceCode: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5008/register', formData);
            alert(response.data.message);
            setFormData({ teamName: '', driverName: '', driverNumber: '', vehicleNumber: '', raceCode: '' });
        } catch (error) {
            alert('Failed to register driver');
        }
    };

    return (
        <div className="app-container">
        {/* Video Background */}
        <video className="video-background" loop autoPlay muted>
            <source src="f1bg.mp4" type="video/mp4" />
            Your browser does not support the video element.
        </video>

            <div className="form-container">
                <h1 className="title">F1 Driver Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Team Name:</label>
                        <input
                            type="text"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Driver Name:</label>
                        <input
                            type="text"
                            name="driverName"
                            value={formData.driverName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Driver Number:</label>
                        <input
                            type="number"
                            name="driverNumber"
                            value={formData.driverNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Vehicle Number:</label>
                        <input
                            type="text"
                            name="vehicleNumber"
                            value={formData.vehicleNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Race Code:</label>
                        <input
                            type="text"
                            name="raceCode"
                            value={formData.raceCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default App;
