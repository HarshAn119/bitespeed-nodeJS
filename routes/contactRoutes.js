const express = require('express');
const { contactRegister } = require('../controllers/contactController');
const router = express.Router();

router.post('/', contactRegister);

module.exports = router;
