const source   = $("#template").html();
const template = Handlebars.compile(source);

class Render{
    renderBoard(board){
        $('#container').empty()
        const html = template({board: board.matrix, score1: board.score['1'], score2: board.score['2']})
        $('#container').append(html)
    }
}