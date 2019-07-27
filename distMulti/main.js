let board
const render = new Render()
const gameController = new GameController()

$('button').on('click', function () {
    const inputX = $('#x-size').val()
    const inputY = $('#y-size').val()
    board = new GoldRush(inputX, inputY)
    render.renderBoard(board)
    $('#kill-container').empty()
})

$('body').on('keydown', function(key){
    gameController.move(key.keyCode)
    render.renderBoard(board)
    gameController.endGame(render)
})
