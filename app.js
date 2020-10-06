const port = 3200
const app = require('./config/server')

/* const rotasNoticias = require('./app/routes/noticias')
rotasNoticias(app)

const rotasHome = require('./app/routes/home')(app) // simplificando a chamada da function

const rotasForm = require('./app/routes/formulario_inclusao')(app)
 */

app.listen(port, () => console.log('Servidor ON'))
