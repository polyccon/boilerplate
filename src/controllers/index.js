const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = express.Router();
const home = require('./home');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', home.get);

module.exports = router;
