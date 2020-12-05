import $ from '../core';

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
        this[i].style.display = display;

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const animation = this.animateOverTime(duration, _fadeIn, final);
        requestAnimationFrame(animation);
    }

    return this;
};

$.prototype.fadeOut = function(duration = 500, final = '') {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection == 1) {
                this[i].style.display = 'none';
            }
        };

        const animation = this.animateOverTime(duration, _fadeOut, final);
        requestAnimationFrame(animation);
    }

    return this;
};