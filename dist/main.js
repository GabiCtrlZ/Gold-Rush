let board
let ai
let interval
const render = new Render()

function move(key) {
    switch (key.keyCode) {
        case 37:
            board.movePlayer(1, 'left')
            break;
        case 38:
            board.movePlayer(1, 'up')
            break;
        case 39:
            board.movePlayer(1, 'right')
            break;
        case 40:
            board.movePlayer(1, 'down')
            break;
        case 65:
            board.movePlayer(2, 'left')
            break;
        case 87:
            board.movePlayer(2, 'up')
            break;
        case 68:
            board.movePlayer(2, 'right')
            break;
        case 83:
            board.movePlayer(2, 'down')
            break;
        case 116:
            return
    }
    render.renderBoard(board)
    endGame(render, interval)
}

function endGame(render, interval) {
    if (gameOver()) {
        clearInterval(interval)
        render.renderEndGame()
    }
}

function gameOver() {
    if (!($('.c').length)) {
        return true
    }
    else return false
}

$('button').on('click', function () {
    const inputX = $('#x-size').val()
    const inputY = $('#y-size').val()
    board = new GoldRush(inputX, inputY)
    ai = new AI()
    render.renderBoard(board)
    interval = setInterval(function () {
        ai.moveAI(board, render)
        endGame(render, interval)
    }, 200)
    interval
    $('#kill-container').empty()
})
$('body').on('keydown', move)
