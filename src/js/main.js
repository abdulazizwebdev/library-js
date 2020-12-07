import './lib/lib';
import $ from './lib/lib';

// examples

$('#first').click(() => {
    $('.w-px500').eq(0).fadeToggle();
});

$('#second').click(() => {
    $('.w-px500').eq(1).fadeToggle();
});


$('#third').click(() => {
    $('.w-px500').fadeToggle();
});

// $('.wrap').html(
//     `
//         <div class="dropdown">
//                 <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//                 <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//                     <a href="#" class="dropdown-item">Action</a>
//                     <a href="#" class="dropdown-item">Action #2</a>
//                     <a href="#" class="dropdown-item">Action #3</a>
//                 </div>
//         </div>
//     `
// );

// $('.dropdown-toggle').dropdown();