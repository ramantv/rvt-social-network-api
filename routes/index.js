const router = require('express').Router();

const apiRoutes = require('./api');

// to route to all of the api routes imported from the 'api' folder
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1> Nothing here!</h1>');
});

module.exports = router;