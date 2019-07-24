const source   = $("#template").html();
const template = Handlebars.compile(source);

class Render{
    renderBoard(board){
        $('#container').empty()
        const html = template({board: board.matrix})
        $('#container').append(html)
    }
}