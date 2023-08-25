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

    
    if(req.errors){
        res.status(404).send(req.errors.mapped().user.msg)
    }

    const userQuery = req.query.user;

    const adminFind = arrAdmins.find(( elem ) => elem.name === userQuery )


    if(adminFind){
        next()
    }else{

        res.send('No tiene permiso de administrador')
    }

    

    // if(adminFind){
    //     req.admin = true
    // }else{
    //     req.admin = false
    // }



}

module.exports = adminMiddle;