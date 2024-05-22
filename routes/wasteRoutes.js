const express = require('express');
const auth = require('../middleware/auth');
const wasteController = require('../controllers/wasteControllers');
const wasteRouter = express.Router();

// Route to create a new service (requires authentication)
wasteRouter.post('/addwaste', auth.verifyToken,auth.isAdmin, wasteController.createWaste);

// Route to get all services (requires authentication)
wasteRouter.get('/getwaste', auth.verifyToken, wasteController.getAllWaste);

module.exports = wasteRouter;
