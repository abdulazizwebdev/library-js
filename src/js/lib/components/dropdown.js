import $ from '../core';

$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(`[data-toggle-id=${$(this[i]).getAttr('id')}]`).fadeToggle();
        });
    }
};

$('.dropdown-toggle').dropdown();       // initiliase dropdown menu...