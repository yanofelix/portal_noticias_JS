    module.exports = app => {
    app.get('/', (req, res) => {
        app.app.controllers.homeController.index(app, req, res)
    })
}