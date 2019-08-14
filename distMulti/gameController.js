class GameController {
    endGame(render) {
        if (this.gameOver()) {
            const won = this.whoWon()
            let text = `Player ${won} won`
            if (won == 3){
                text = 'tie'
            }
            render.renderEndGame(text)
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