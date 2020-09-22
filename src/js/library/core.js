const $meow = function(selector) {
    return new $meow.prototype.init(selector);
}

$meow.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
}



$meow.prototype.init.prototype = $meow.prototype;
window.$meow = $meow;
export default $meow;