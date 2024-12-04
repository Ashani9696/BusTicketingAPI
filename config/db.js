// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (err) {
//         console.error(err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // No need for useNewUrlParser or useUnifiedTopology
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;

