module.exports.formulario_inclusao_noticias = function(app, req, res) {
    res.render('admin/form_add_noticia', {valide: {}, noticia: {}})
}

module.exports.noticia_salvar = (app, req, res) =>{
    const noticia = req.body    

    req.assert('titulo', 'Titulo não pode ficar em branco').notEmpty()
    req.assert('resumo', 'Resumo não pode ficar em branco').notEmpty()
    req.assert('noticia', 'Noticia não pode ficar em branco').notEmpty()
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100)
    req.assert('autor', 'Autor não pode ficar em branco').notEmpty()
    req.assert('data_noticia', 'Data não pode ficar em branco').notEmpty()
    req.assert('data_noticia', 'Valores invalidos para data').isDate({format: 'YYYY-MM-DD'})

    let erros = req.validationErrors()

    if(erros) {
        res.render('admin/form_add_noticia',{valide: erros, noticia: noticia })
        return
    }

    const conn = app.config.databaseCon()
    const noticiasModel = new app.app.models.NoticiasDAO(conn)
  
    noticiasModel.salvarNoticia(noticia, function(erro, result) {
        res.redirect('/noticias')
    })

}