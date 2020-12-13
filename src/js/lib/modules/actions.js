import $ from '../core';

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;        // will change the structure of html
        } else {
            return this[i].innerHTML;           // will return content of html code
        }
    }

    return this;
};

$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;


    for(let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;                             
    this.length = 1;

    return this;
};

$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };
    return childs.findIndex(findMyIndex);      // will return index of item: "1", "2" and etc.
};

$.prototype.find = function(selector) {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    let copyObj = Object.assign({}, this);  // new copy {} of this

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;                      // will filter items and create new {} with filtred items

            if (copyObj[i] === arr[j]) {
                continue;                   // will dismiss the item which used for function
            }
        }

        numberOfItems += arr.length - 1;
    }
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];         // will delete items which don't matches
    }

    return this;
};

$.prototype.value = function() {
    for(let i = 0; i < this.length; i++){
        const value = this[i].getAttribute('value');
        return value;
    }

    return this;
};

