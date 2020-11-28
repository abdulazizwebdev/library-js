import './lib/lib';
import $ from './lib/lib';

// examples

$('.active').setAttr('data-test', 'value-2');

console.log($('.active').getAttr('data-test'));