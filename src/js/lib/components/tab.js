import $ from '../core';

$.prototype.tab = function(
    tabActiveClass = 'tab-item--active', 
    tab = '.tab',
    tabContent = '.tab-content',
    tabContentActive = 'tab-content--active') {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass(tabActiveClass)
                .closest(tab)
                .find(tabContent)
                .removeClass(tabContentActive)
                .eq($(this[i]).index())
                .addClass(tabContentActive);
        });
    }
};

// $.prototype.tab = function() {
//     for (let i = 0; i < this.length; i++) {
//         $(this[i]).on('click', () => {
//             $(this[i])
//                 .addClass('tab-item--active')
//                 .siblings()
//                 .removeClass('tab-item--active')
//                 .closest('.tab')
//                 .find('.tab-content')
//                 .removeClass('tab-content--active')
//                 .eq($(this[i]).index())
//                 .addClass('tab-content--active');
//         });
//     }
// };

$('[data-tabpanel] .tab-item').tab();