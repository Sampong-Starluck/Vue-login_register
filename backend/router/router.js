const express = require('express');
const router = express.Router();
const signController = require('../controller/signController');

router.get("/register", signController.register);

module.exports = router;