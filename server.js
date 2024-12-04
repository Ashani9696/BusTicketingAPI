const express = require('express');
const connectDB = require('./config/db'); // Adjust the path based on your file structure

const app = express();

// Connect to MongoDB
connectDB();

// Middleware and routes
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
