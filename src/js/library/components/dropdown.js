import $meow from '../core';

$meow.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $meow(this[i]).click(() => {
            $meow(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

$meow('.dropdown-toggle').dropdown();