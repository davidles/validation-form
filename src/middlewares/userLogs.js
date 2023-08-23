/*** Middleware Global */
const fs = require('fs');
const path = require('path')

const userLogs = (req, res, next) =>{
    fs.appendFileSync( path.join(__dirname,'..','logs','userLog.txt'), `El usuario realizó una petición ${req.method} a ${req.url}
    ` )

    next();
}

module.exports = userLogs;