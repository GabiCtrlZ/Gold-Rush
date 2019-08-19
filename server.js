//Requiring const variables
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const socketIo = require('socket.io')
const GoldRush = require('./goldRush')
const GameController = require('./gameController')
const gameController = new GameController()

//Basic server config stuff
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/Single', express.static(path.join(__dirname, 'distSingle')))
app.use('/Multi', express.static(path.join(__dirname, 'distMulti')))

//Server listens
const server = app.listen(process.env.PORT || port, function () {
    console.log('server on port ' + port)
})

//Creating socket
const io = socketIo(server)

let board
let num = 1
io.on('connection', function (socket) {
    console.log('a socket connection has been made', socket.id)
    let player = num
    //Handle incoming player movement events
    socket.on('play', function (data) {
        //sending back the data
        gameController.move(data.key, board, player)
        io.sockets.emit('play', {board})
    })
    //Handle board issues
    socket.on('getBoard', function (data) {
        if (!board) {
            board = new GoldRush(data.inputX, data.inputY)
        }
        io.sockets.emit('getBoard', { board })
    })
    num++
    if (num > 2){
        num = 1
        board = null
    }
})
