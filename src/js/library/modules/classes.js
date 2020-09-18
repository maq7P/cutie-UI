import $meow from '../core';

$meow.prototype.addClass = function (...classNames) {
    for(let i = 0; i < this.length; i++){
        if(!this[i].classList){
            continue;
        }

        this[i].classList.add(...classNames);

    }

    return this;
};

$meow.prototype.delClass = function (...classNames) {
    for(let i = 0; i < this.length; i++){
        if(!this[i].classList){
            continue;
        }
        this[i].classList.remove(...classNames);
    }

    return this;
};

$meow.prototype.togClass = function (...classNames) {
    for(let i = 0; i < this.length; i++){
        if (!this[i].classList) {
            continue;
        }
        this[i].classList.toggle(...classNames);
    }

    return this;
};