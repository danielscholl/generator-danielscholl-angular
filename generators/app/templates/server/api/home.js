const express = require('express');
const component = require('../components');
const config = require('../config/environment');
const router = express.Router();


// ----------------------
// APIs
// ----------------------
// GET   /api/v1/home/   -- Get Item

router.get('/', component.homeService(config).Read);

module.exports = router;
