const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// use "/users" prefix for routes created in "user-routes.js"
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;