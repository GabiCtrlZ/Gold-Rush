let board
let ai
let interval
const render = new Render()
const gameController = new GameController()

$('button').on('click', function () {
    const inputX = $('#x-size').val()
    const inputY = $('#y-size').val()
    board = new GoldRush(inputX, inputY)
    ai = new AI()
    render.renderBoard(board)
    interval = setInterval(function () {
        ai.moveAI(board, render)
        gameController.endGame(render, interval)
    }, 200)
    interval
    $('#kill-container').empty()
})
$('body').on('keydown', function(key){
    gameController.move(key.keyCode)
    render.renderBoard(board)
    gameController.endGame(render, interval)
})
