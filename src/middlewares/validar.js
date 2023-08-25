const { body, validationResult } = require('express-validator');

const listaValidacion = [
    body('user').notEmpty().withMessage('Debe ingresar una búsqueda')
]

const validarErrores = ( req, res, next ) => {

    const errors = validationResult(req);

    req.errors = errors

    next()
}


module.exports = {
    listaValidacion,
    validarErrores
}