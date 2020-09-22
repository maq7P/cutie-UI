import $meow from '../core';

$meow.prototype.animateOverTime = function(duration, callback, finaly){
    let timeStart;

    function _animateOverTime(time){
        if (!timeStart){
            timeStart = time;
        }

        let timeElapced = time - timeStart;
        let complexion = Math.min(timeElapced / duration, 1);

        callback(complexion);

        if (timeElapced < duration) {
            requestAnimationFrame(_animateOverTime)
        } else {
            if (typeof finaly === 'function') {
                finaly();
            }
        }
    }
    return _animateOverTime;
};

$meow.prototype.fadeIn = function (duration, display='block', finaly) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display;

        const _fadeIn = (complexion) => {
            this[i].style.opacity = complexion;
        };

        const animation = this.animateOverTime(duration, _fadeIn, finaly);
        requestAnimationFrame(animation);
    }

    return this;
}

$meow.prototype.fadeOut = function (duration, finaly) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complexion) => {
            this[i].style.opacity = 1 - complexion;
            if (complexion == 1){
                this[i].style.display = 'none';
            }
        };

        const animation = this.animateOverTime(duration, _fadeOut, finaly);
        requestAnimationFrame(animation);
    }

    return this;
}

$meow.prototype.fadeToggle = function (duration, display = 'block', finaly) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display == 'none'){
             this[i].style.display = display;

             const _fadeIn = (complexion) => {
                 this[i].style.opacity = complexion;
             };

             const animation = this.animateOverTime(duration, _fadeIn, finaly);
             requestAnimationFrame(animation);
        } else{
            const _fadeOut = (complexion) => {
                this[i].style.opacity = 1 - complexion;
                if (complexion == 1) {
                    this[i].style.display = 'none';
                }
            };

            const animation = this.animateOverTime(duration, _fadeOut, finaly);
            requestAnimationFrame(animation);
        }
    }

    return this;
}
