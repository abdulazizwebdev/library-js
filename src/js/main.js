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

$('button').on('click', function(){
    $('div').eq(1).toggleClass('active');
    $('div').eq(2).toggleClass('active');
});

// ///////////////////////////////////////////////////

// const btns = document.querySelectorAll('button');
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         btn.style.display = 'none';
//     });
// });

$('div').click(function() {
    console.log($(this).index());
});

console.log($('.more').eq(0).siblings());
  

