const Ventas = require('./ventas.controller')

module.exports = (router) => {
    router.post('/ventas/createAnswer', Ventas.createAnswer)
    router.get('/ventas/getAll', Ventas.getAll)
    router.post('/ventas/deleteAnswer', Ventas.deleteAnswer)
}