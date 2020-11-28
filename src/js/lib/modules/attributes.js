import $ from '../core';

$.prototype.setAttr = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, value);
    }

    return this;
};

$.prototype.getAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        this[i].getAttribute(attributeName);
    }

    return this;
};