const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');

// Sets up /api and htmlRoutes
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
