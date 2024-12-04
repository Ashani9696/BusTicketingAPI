const Bus = require('../models/Bus');

exports.getAllBuses = async (req, res) => {
    try {
        const buses = await Bus.find().populate('route');
        res.json(buses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBus = async (req, res) => {
    const { busNumber, route, seatsAvailable, schedule } = req.body;
    try {
        const newBus = new Bus({ busNumber, route, seatsAvailable, schedule });
        await newBus.save();
        res.status(201).json(newBus);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
