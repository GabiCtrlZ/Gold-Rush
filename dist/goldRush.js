class GoldRush extends Matrix {
    constructor(x, y) {
        super(x, y)
        this.ranCoinGenerator(x, y)
        this.ranBlockGenerator(x,y)
        this.matrix[0][0] = '1'
        this.matrix[this.matrix.length - 1][this.matrix[0].length - 1] = '2'
        this.score = {'1':0, '2':0}
    }
    ranBlockGenerator(x, y){
        for (let i = 0; i < x*2; i++){
            const ranX =Math.floor(Math.random()*x)
            const ranY =Math.floor(Math.random()*y)
            if(this.matrix[ranX][ranY] == 'a'){
                this.matrix[ranX][ranY] = 'b'
            }
        }
    }
    ranCoinGenerator(x, y){
        for (let i = 0; i < x*4; i++){
            this.matrix[Math.floor(Math.random()*x)][Math.floor(Math.random()*y)] = 'c'
        }
    }
    appedScore(player, pos){
        if (this.matrix[pos.x][pos.y] == 'c'){
            this.score[player] += 10
        }
    }
    checkBlock(pos){
        if (this.matrix[pos.x][pos.y] == 'a' || this.matrix[pos.x][pos.y] == 'c'){
            return true
        }
    }
    movePlayer(player, direction) {
        const pos = this.findCoordinate(player)
        const x = pos.x
        const y = pos.y
        switch (direction) {
            case 'left':
                if (y != 0 && this.checkBlock({x, y: y-1})) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x, y: y-1})
                    this.matrix[x][y - 1] = player
                }
                break;
            case 'right':
                if (y != (this.matrix[0].length - 1) && this.checkBlock({x, y: y+1})) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x, y: y+1})
                    this.matrix[x][y + 1] = player
                }
                break;
            case 'up':
                if (x != 0 && this.checkBlock({x: x-1, y})) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x: x-1, y})
                    this.matrix[x - 1][y] = player
                }
                break;
            case 'down':
                if (x != (this.matrix.length - 1) && this.checkBlock({x: x+1, y})) {
                    this.matrix[x][y] = 'a'
                    this.appedScore(player, {x: x+1, y})
                    this.matrix[x + 1][y] = player
                }
        }
    }
}