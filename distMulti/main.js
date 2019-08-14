let board
const render = new Render()
const gameController = new GameController()

//Make connections
const socket = io.connect('https://barba.serveo.net')

$('button').on('click', async function () {
    const inputX = $('#x-size').val()
    const inputY = $('#y-size').val()
    socket.emit('getBoard', {
        inputX,
        inputY
    })
})

socket.on('getBoard', function (data) {
    board = data.board
    render.renderBoard(board)
    $('#kill-container').empty()
})

$('body').on('keydown', function (key) {
    let ind = key.keyCode
    if ((ind >= 37 && ind <= 40)) {
        console.log('gef')
        socket.emit('play', {
            key: key.keyCode
        })
    }
})

socket.on('play', function (data) {
    console.log(data)
    render.renderBoard(data.board)
    gameController.endGame(render)
})