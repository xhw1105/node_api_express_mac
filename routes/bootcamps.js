const express = require('express');
const router = express.Router();
const { getAllBootcamps } = require('../controllers/bootcamps');

router.route('/').get(getAllBootcamps);

module.exports = router;
