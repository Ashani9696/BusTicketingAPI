const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    distance: { type: Number, required: true },
    buses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bus' }]
});

module.exports = mongoose.model('Route', routeSchema);
