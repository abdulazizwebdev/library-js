import './lib/lib';
import $ from './lib/lib';

// examples

// console.log($('.active').mapAttr('data-test'));     // will return array: ["key-1", "key-2"]

////////////////////////////////////////////////////////////////////////////////////////////

// const elements = document.querySelectorAll('.active');
// const arr = [];

// elements.forEach((elem) => {
//     let attr = elem.getAttribute('data-test');
//     if (attr) {
//         return arr.push(attr);
//     }
    
// });
// console.log(arr);                                   // will return array: ["key-1", "key-2"]

// // another example

$('div').eq(1).on('click', function(){
    $('button').fadeIn();
});

$('button').on('click', function(){
    $(this).fadeOut();
});
// ///////////////////////////////////////////////////

// const btns = document.querySelectorAll('button');
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.style.display = 'none';
//     });
// });

