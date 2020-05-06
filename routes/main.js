const express = require('express');
const router = express.Router();

const science = require('../controllers/science');

router.post("/science", science);

module.exports = router;