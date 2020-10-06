const mysql = require('mysql')

const connMYSQL = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '',
        database: 'portal_noticias'
    })
} 

module.exports = () => {
    return connMYSQL
}