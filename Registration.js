const mongoose = require('mongoose');

// Define schema for driver registration
const registrationSchema = new mongoose.Schema({
    teamName: { type: String, required: true },
    driverName: { type: String, required: true },
    driverNumber: { type: Number, required: true },
    vehicleNumber: { type: String, required: true },
    raceCode: { type: String, required: true },
});

// Explicitly specify the collection name
module.exports = mongoose.model('Registration', registrationSchema, 'race-registry');
