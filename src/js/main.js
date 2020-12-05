import './lib/lib';
import $ from './lib/lib';

// examples

$('#first').click(() => {
    $('.w-px500').eq(0).fadeOut();
});

$('#second').click(() => {
    $('.w-px500').eq(1).fadeOut();
});


$('#third').click(() => {
    $('.w-px500').fadeIn();
});