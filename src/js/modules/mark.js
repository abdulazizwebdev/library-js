import $ from '../lib/lib';
import checkForWin from './checkForWin';

let i = 1;

const mark = function() {    
    let progress;

    $('.btn.btn-dark').click(function() {
        if (i % 2 == 0) {
            $(this).html('O');
            $('.title').html('Turn: Player 1');
            $(this).setAttr('data-click', 'O');
        } else {
            $(this).html('X');
            $('.title').html('Turn: Player 2');
            $(this).setAttr('data-click', 'X');
        }
        $(this).addClass('active');
        
        $(this).setAttr('disabled', true);
        
        i = i + 1;
        progress = checkForWin(); 
    });
    clearMarks();
};

const clearMarks = function () {
    $('.play').click(() => {
        $('.btn.btn-dark').removeAttr('data-click');
        $('.btn.btn-dark').removeAttr('disabled');
        $('.btn.btn-dark').removeClass('clicked', 'active');
        $('.btn.btn-dark').html(' ');
        $('.title').html('Turn: Player 1');
        i = 1;
    });
};

export default mark;