const arrAdmins = require('../database/data.json')

const adminMiddle = (req, res, next) =>{
    /**
     * req{
     *  query:{
     *      user:
     *      price:
     *      limit: 
     * }
     * }
     */

    // Lo sacamos de acá  para que se encargue el middleware "validarErrores"
    // Si hay errores en el formulario no va a llegar a este middleware

    /************* BORRAR  ************/
    if(req.errors){
        res.status(404).send(req.errors.mapped().user.msg)
    }

    /******************************************* */

    const userQuery = req.query.user;

    const adminFind = arrAdmins.find(( elem ) => elem.name === userQuery )


    if(adminFind){
        next()
    }else{

        res.send('No tiene permiso de administrador')
    }


}

module.exports = adminMiddle;