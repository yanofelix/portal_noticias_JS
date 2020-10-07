module.exports.noticias = (app, req, res) =>{

    const conn = app.config.databaseCon()
    const noticiasModel = new app.app.models.NoticiasDAO(conn)
  
    noticiasModel.getNoticias(function (erro, result) {
        res.render('noticias/noticias', {noticias: result})
    })

}

module.exports.noticia = (app, req, res) => {

    const conn = app.config.databaseCon()
    const noticiasModel = new app.app.models.NoticiasDAO(conn)
    const idNoticia = req.query

    noticiasModel.getNoticia(idNoticia, function (err, result) {
        res.render('noticias/noticia', {noticia: result})
    })

}