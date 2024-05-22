const jwt = require('jsonwebtoken');  // Import JWT
const config = require('../utils/config');  // Import config
const User = require('../models/user');  // Import User model

const auth = {
    verifyToken: (request, response, next) => {
        try {
            // Get token from request cookies
            const token = request.cookies.token;

            // If token does not exist, return an error
            if (!token) {
                return response.status(401).json({ message: 'Unauthorized: Token not found' });
            }

            // Verify token
            try {
                const decodedToken = jwt.verify(token, config.JWT_SECRET);

                // Set userId in request object
                request.userId = decodedToken.id;

                // Call the next middleware
                next();
            } catch (error) {
                console.error('Token verification failed:', error.message);
                return response.status(401).json({ message: 'Unauthorized: Invalid token' });
            }
        } catch (error) {
            console.error('Middleware error:', error.message);
            return response.status(500).json({ message: 'Internal Server Error' });
        }
    },
    isAdmin: async (request, response, next) => {
        try {
            // Get the user id from the request object
            const userId = request.userId;

            // Find the user by id
            const user = await User.findById(userId);

            // If the user is not an admin, return an error
            if (user.role !== 'admin') {
                return response.status(403).json({ message: 'Forbidden' });
            }

            // if the user is an admin, call the next middleware
            next();
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }
};

// Export auth object
module.exports = auth;
