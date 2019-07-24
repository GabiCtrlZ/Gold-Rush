class GoldRush extends Matrix {
    constructor(x, y) {
        super(x, y)
        this.ranCoinGenerator(x, y)
        this.matrix[0][0] = '1'
        this.matrix[this.matrix.length - 1][this.matrix[0].length - 1] = '2'
        this.score = {'1':0, '2':0}
    }
    ranCoinGenerator(x, y){
        for (let i = 0; i < x*1.5; i++){
            this.matrix[Math.floor(Math.random()*x)][Math.floor(Math.random()*y)] = 'c'
        }
    }
    appedScore(player, pos){
        if (this.matrix[pos.x][pos.y] == 'c'){
            this.score[player] += 10
        }
    }
    movePlayer(player, direction) {
        const pos = this.findCoordinate(player)
        const x = pos.x
        const y = pos.y
        switch (direction) {
            case 'left':
                if (y != 0) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x, y: y-1})
                    this.matrix[x][y - 1] = player
                }
                break;
            case 'right':
                if (y != (this.matrix[0].length - 1)) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x, y: y+1})
                    this.matrix[x][y + 1] = player
                }
                break;
            case 'up':
                if (x != 0) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x: x-1, y})
                    this.matrix[x - 1][y] = player
                }
                break;
            case 'down':
                if (x != (this.matrix.length - 1)) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x: x+1, y})
                    this.matrix[x + 1][y] = player
                }
        }
    }
}