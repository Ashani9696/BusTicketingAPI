const mongoose = require('mongoose');


const busSchema = new mongoose.Schema({
    busNumber: { type: String, required: true },
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    seatsAvailable: { type: Number, required: true },
    schedule: [{ date: String, time: String }],
});

module.exports = mongoose.model('Bus', busSchema);
