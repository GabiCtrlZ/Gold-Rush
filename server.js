const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use('/Single', express.static(path.join(__dirname, 'distSingle')))
app.use('/Multi', express.static(path.join(__dirname, 'distMulti')))

app.listen(port, function () {
    console.log('server on port ' + port)
})