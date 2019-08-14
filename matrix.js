class Matrix {
    constructor(x, y) {
        this.matrix = this.generateMatrix(x, y)
    }
    generateMatrix(x, y) {
        let matrix = []
        for (let i = 0; i < x; i++) {
            matrix.push([])
            for (let j = 0; j < y; j++) {
                matrix[i].push("a")
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


module.exports = Matrix