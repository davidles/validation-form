
// Cambiar body por check: porque al dato lo esta recibiendo por query y no por body ( get / post)
const { body, validationResult } = require('express-validator');

const listaValidacion = [
    body('user').notEmpty().withMessage('Debe ingresar una búsqueda')
]

const validarErrores = ( req, res, next ) => {

    const errors = validationResult(req);

    // Si no hay errores --->  next

    // Sino, renderizamos index con los errores y no pasamos al otro middleware

    /****** BORRAR *******/
    req.errors = errors
    /******************* */

    next()
}


module.exports = {
    listaValidacion,
    validarErrores
}
