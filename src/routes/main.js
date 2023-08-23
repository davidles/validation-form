const express = require('express');
const router = express.Router();
/** Controller */
const mainController = require('../controllers/main');
const logMiddle = require('../middlewares/log');

router.get('/', logMiddle, mainController.index);


module.exports = router;