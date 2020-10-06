module.exports = function(app){

    app.get('/noticias',function(req, res) {
        
        const conn = app.config.databaseCon()
        const noticiasModel = new app.app.models.NoticiasDAO(conn)
      
        noticiasModel.getNoticias(function (erro, result) {
            res.render('noticias/noticias', {noticias: result})
        })
    })
 
}
