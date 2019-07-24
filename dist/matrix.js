class Matrix {
    constructor(x, y) {
        this.matrix = this.generateMatrix(x, y)
    }
    generateMatrix(x, y) {
        let matrix = []
        for (let i = 0; i < x; i++) {
            matrix.push([])
            for (let j = 0; j < y; j++) {
                matrix[i].push(".")
            }
        }
        return matrix
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ''
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + '\t')
            }
            console.log(line)
        }

    }
    get(x, y) {
        return this.matrix[x][y]
    }
    alter(x, y, num) {
        this.matrix[x][y] = num
    }
    printColumn(y) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][y])
        }
    }
    printRow(x) {
        for (let i = 0; i < this.matrix[x].length; i++) {
            console.log(this.matrix[x][i])
        }
    }
    findCoordinate(num) {
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == num) {
                    return { x: i, y: j }
                }
            }
        }
        return { x: null, y: null }
    }
}

class GoldRush extends Matrix {
    constructor(x, y) {
        super(x, y)
        this.matrix[0][0] = '1'
        this.matrix[this.matrix.length - 1][this.matrix[0].length - 1] = '2'
    }
    ranCoinGenerator(x, y){
        for (let i = 0; i < x; i++){
            
        }
    }
    movePlayer(player, direction) {
        const pos = this.findCoordinate(player)
        const x = pos.x
        const y = pos.y
        switch (direction) {
            case 'left':
                if (y != 0) {
                    this.matrix[x][y] = '.'
                    this.matrix[x][y - 1] = player
                }
                break;
            case 'right':
                if (y != (this.matrix[0].length - 1)) {
                    this.matrix[x][y] = '.'
                    this.matrix[x][y + 1] = player
                }
                break;
            case 'up':
                if (x != 0) {
                    this.matrix[x][y] = '.'
                    this.matrix[x - 1][y] = player
                }
                break;
            case 'down':
                if (x != (this.matrix.length - 1)) {
                    this.matrix[x][y] = '.'
                    this.matrix[x + 1][y] = player
                }
        }
    }
}

const board = new GoldRush(5, 5)
