import $ from '../core';

$.prototype._fadeIn = function(duration, display, final, item) {
    item.style.display = display;

    const _fadeIn = (complection) => {
        item.style.opacity = complection;
    };

    const animation = this.animateOverTime(duration, _fadeIn, final);
    requestAnimationFrame(animation);
};

$.prototype._fadeOut = function (duration, final, item) {
    const _fadeOut = (complection) => {
        item.style.opacity = 1 - complection;
        if (complection == 1) {
            item.style.display = 'none';
        }
    };

    const animation = this.animateOverTime(duration, _fadeOut, final);
    requestAnimationFrame(animation);
};

$.prototype.animateOverTime = function(duration, callback, final) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;

        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof final === 'function') {
                final();
            }
        }
    }

    return _animateOverTime;
};

$.prototype.fadeIn = function(duration = 500, display = 'block', final = '') {
    for (let i = 0; i < this.length; i++) {
        this._fadeIn(duration, display, final, this[i]);
    }

    return this;
};

$.prototype.fadeOut = function(duration = 500, final = '') {
    for (let i = 0; i < this.length; i++) {
        this._fadeOut(duration, final, this[i]);
    }

    return this;
};

$.prototype.fadeToggle = function(duration = 500, display = 'block', final = '') {
    for (let i = 0; i < this.length; i++) {
        try {
            if (window.getComputedStyle(this[i]).display === 'none') {
                this._fadeIn(duration, display, final, this[i]);
            } else {
                this._fadeOut(duration, final, this[i]);
            }
        }catch(e){}
    }

    return this;
};