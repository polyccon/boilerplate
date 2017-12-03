const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const home = require('./home');
const contact = require('./contact');

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', home.get);
router.get('/home', home.get);
router.get('/contact', contact.get);

module.exports = router;
