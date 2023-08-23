const log = (req, res, next) =>{
    /**
     * req{
     *  query:{
     *      user :
     * }
     * }
     */

    const arrAdmins = ['Tim','Ada', 'Martin']
    
    const userQuery = req.query.user

    const adminFind = arrAdmins.find(( elem ) => elem === userQuery )

    if(adminFind){
        req.admin = true
    }else{
        req.admin = false
    }



    next();
}

module.exports = log;