class GoldRush extends Matrix{
    constructor(x, y) {
        super(x, y)
        this.matrix[0][0] = '1'
        this.matrix[this.matrix.length-1][this.matrix[0].length-1] = '2'
    }
}