import $ from '../core';

$.prototype.setAttr = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, value);
    }

    return this;
};

$.prototype.getAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        return this[i].getAttribute(attributeName);     // will return value of first item's attribute: "value"
    }

    return this;
};

$.prototype.removeAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attributeName);     // will remove the atrribute
    }

    return this;
};

$.prototype.mapAttr = function(attributeName) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        let attr = this[i].getAttribute(attributeName);
        if (!attr) {
            continue;
        }

        arr.push(attr);
        if (i == this.length - 1) {
            return arr;     // will return array which include all attributes value: ["key-1", "key-2"]
        }
    }

    return this;
};