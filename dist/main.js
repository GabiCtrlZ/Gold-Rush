const render = new Render()
const board = new GoldRush(5, 5)
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
    }
    render.renderBoard(board)
}
$('body').on('keydown', move)