const express = require('express');
const router = express.Router();
/** Controller */
const mainController = require('../controllers/main');
const logMiddle = require('../middlewares/admin');

const { listaValidacion, validarErrores } = require('../middlewares/validar');

router.get('/', mainController.index);
router.get('/admin', listaValidacion, validarErrores, logMiddle, mainController.admin )


module.exports = router;