module.exports = app => {
    app.get('/formulario_inclusao_noticias', function(req, res) {
       app.app.controllers.adminController.formulario_inclusao_noticias(app, req, res)
    })

    app.post('/noticias/salvar', function(req, res) {
        app.app.controllers.adminController.noticia_salvar(app, req, res)
    })
}