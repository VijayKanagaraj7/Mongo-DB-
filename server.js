// Import dependencies
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Registration = require('./models/Registration'); // Registration model for your database

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// API Routes
// POST route for registering a driver
app.post('/register', async (req, res) => {
    try {
        const newDriver = new Registration(req.body); // Create a new driver entry
        await newDriver.save(); // Save the new driver to the database
        res.status(201).json({ message: 'Driver registered successfully!' }); // Send success message
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register driver' }); // Error message
    }
});

// Start Server
const PORT = process.env.PORT || 5008;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)); // Start server
