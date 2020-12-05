import $ from '../core';

$.prototype.on = function(eventName, functionName) {
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, functionName);
    }

    return this;
};

$.prototype.off = function(eventName, functionName) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, functionName);
    }

    return this;
};

$.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
        
    }

    return this;
};