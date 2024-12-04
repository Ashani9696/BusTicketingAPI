const Route = require('../models/Route');

exports.getAllRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.json(routes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createRoute = async (req, res) => {
    const { origin, destination, distance } = req.body;
    try {
        const newRoute = new Route({ origin, destination, distance });
        await newRoute.save();
        res.status(201).json(newRoute);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
