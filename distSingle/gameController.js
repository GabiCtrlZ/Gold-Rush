class GameController {
    move(key) {
        switch (key) {
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
            case 116:
                return
        }
    }
    
    endGame(render, interval) {
        if (this.gameOver()) {
            const won = this.whoWon()
            let text = `Player ${won} won`
            if (won == 3){
                text = 'tie'
            }
            render.renderEndGame(text)
            clearInterval(interval)
        }
    }
    
    gameOver() {
        if (!($('.c').length)) {
            return true
        }
        else return false
    }
    whoWon(){
        const score1 = $('.score1 > p').html()
        const score2 = $('.score2 > p').html()
        if (score1 > score2){
            return 1
        }
        else if (score2 > score1){
            return 2
        }
        return 3
    }
}