const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', express.static('public'));

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
