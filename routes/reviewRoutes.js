const express = require('express');
const reviewRouter = express.Router();
const auth = require('../middleware/auth');
const reviewController = require('../controllers/reviewController');

reviewRouter.post('/', auth.verifyToken, reviewController.createReview);
reviewRouter.get('/', reviewController.getAllReviews);

module.exports = reviewRouter;


