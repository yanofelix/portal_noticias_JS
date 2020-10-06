module.exports = function(app){

    app.get('/noticia/', function (req, res) {
        
        const conn = app.config.databaseCon()
        const noticiasModel = new app.app.models.NoticiasDAO(conn)

        noticiasModel.getNoticia(function (err, result) {
            res.render('noticias/noticia', {noticia: result})
        })
        
    })

}