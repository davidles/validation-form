const { check, validationResult } = require('express-validator');

const listaValidacion = [
    check('user').notEmpty().withMessage('Debes ingresar un nombre válido')
]


const validarErrores = ( req, res, next ) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        next()
    }else{
        res.render('index',{
            errors: errors.mapped()
        })
    }

}


module.exports = {
    listaValidacion,
    validarErrores
}