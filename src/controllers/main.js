const mainController = {
    index: (req,  res) => {
        if(req.admin){
            res.send(`<h1>Hola admin: ${req.query.user}</h1>`)
        }
        res.send(`<h1>No tiene permiso de admin</h1>`)

    }
}

module.exports = mainController;