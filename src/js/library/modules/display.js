import $meow from '../core';

$meow.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].style){
            continue;
        }
        this[i].style.display = '';
    }
    return this;
}

$meow.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].style){
            continue;
        }
        this[i].style.display = 'none';
    }
    return this;
}

$meow.prototype.toggle = function() {
    for (let i = 0; i < this.length; i++) {
        if(!this[i].style){
            continue;
        }
        if (this[i].style.display){
            this[i].style.display = '';
        } else{
            this[i].style.display = 'none';
        }
    }
    return this;
}
