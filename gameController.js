class GameController {
    move(key, board, player) {
        switch (key) {
            case 37:
                board.movePlayer(player, 'left')
                break;
            case 38:
                board.movePlayer(player, 'up')
                break;
            case 39:
                board.movePlayer(player, 'right')
                break;
            case 40:
                board.movePlayer(player, 'down')
                break;
        }
    }
}

module.exports = GameController