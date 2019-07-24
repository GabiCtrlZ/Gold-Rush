class AI {
    constructor() {
        this.beenAt = []
    }
    findMyself(board) {
        return board.findCoordinate('2')
    }
    getWorth(board, pos) {
        console.log(pos)
        if (pos.x > 9 || pos.x < 0){
            return -10
        }
        const char = board.matrix[pos.x][pos.y]
        if (this.beenAt.some(x => x.x == pos.x && x.y == pos.y)) {
            return 5
        }
        switch (char) {
            case 'a':
                return 10
            case 'b':
                return -10
            case '1':
                return -10
            case 'c':
                return 100
            default:
                return -20
        }
    }
    bestDir(board) {
        const pos = this.findMyself(board)
        const left = this.getWorth(board, { x: pos.x, y: pos.y - 1 })
        const right = this.getWorth(board, { x: pos.x, y: pos.y + 1 })
        const up = this.getWorth(board, { x: pos.x - 1, y: pos.y })
        const down = this.getWorth(board, { x: pos.x + 1, y: pos.y })
        return this.whereTo(right, left, up, down)
    }
    moveAI(board, render) {
        const dir = this.bestDir(board)
        this.beenAt.push(this.findMyself(board))
        switch (dir) {
            case 1:
                board.movePlayer(2, 'left')
                break;
            case 2:
                board.movePlayer(2, 'up')
                break;
            case 3:
                board.movePlayer(2, 'right')
                break;
            case 4:
                board.movePlayer(2, 'down')
        }
        render.renderBoard(board)
    }
    highestEq(right, left, up, down){
        const max = Math.max(right, left, up, down)
        const arr = []
        if (left == max){ arr.push(1)}
        if (up == max){ arr.push(2)}
        if (right == max){ arr.push(3)}
        if (down == max){ arr.push(4)}
        return arr
    }
    whereTo(right, left, up, down) {
        const arr = this.highestEq(right, left, up, down)
        if (arr.length > 1){
            return arr[Math.floor(Math.random()*arr.length)]
        }
        switch (Math.max(right, left, up, down)) {
            case left:
                return 1
            case up:
                return 2
            case right:
                return 3
            case down:
                return 4
            default:
                return 5
        }
    }
}