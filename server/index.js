const express = require('express')
const app = express()

const routes = require('./routes')

app.listen(3000)

app.use(express.static('public'))
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
})
app.use('/', routes())

module.export = app;