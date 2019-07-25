const render = new Render()
const board = new GoldRush(10, 10)
const ai = new AI()
render.renderBoard(board)
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
    }
    render.renderBoard(board)
}
$('body').on('keydown', move)

function gameOver(){
    if (!($('.c').length)){
        return true
    }
    else return false
}
const interval = setInterval(function(){
    ai.moveAI(board, render)
    if(gameOver()){
        clearInterval(interval)
    }
}, 200)
interval