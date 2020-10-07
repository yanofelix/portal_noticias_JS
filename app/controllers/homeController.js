module.exports.index = (app, req, res) => {

    const conn = app.config.databaseCon()
    const noticiasModel = new app.app.models.NoticiasDAO(conn)

    noticiasModel.get5last((error, result)=>{    
        res.render("home/index", {noticias: result})
    })

}