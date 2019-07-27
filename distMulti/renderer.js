const source   = $("#template").html();
const template = Handlebars.compile(source);

class Render{
    renderBoard(board){
        $('#container').empty()
        const html = template({board: board.matrix, score1: board.score['1'], score2: board.score['2']})
        $('#container').append(html)
    }
    renderEndGame(text){
        $('.end').remove()
        $('body').append(`<div class='end'>Game Over ${text}</div>`)
        setInterval(function(){
            const css = $('.end').css('visibility')
            console.log(css)
            if (css == 'hidden'){
                $('.end').css('visibility', 'visible')
            }
            else{
                $('.end').css('visibility', 'hidden')
            }
        }, 1200)
    }
}