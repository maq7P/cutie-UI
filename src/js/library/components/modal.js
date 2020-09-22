import $meow from '../core';

$meow.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        // console.log(target);
        $meow(this[i]).click(e => {
            e.preventDefault();
            $meow(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`[data-close]`);

        closeElements.forEach(elem => {
            $meow(elem).click(e => {
                $meow(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelectorAll(target).forEach(elem => {
                        elem.remove();
                    })
                }
            });
        });

        $meow(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $meow(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelectorAll(target).forEach(elem => {
                        elem.remove();

                    })
                }
            }
        });
    }
};

$meow('[data-toggle="modal"]').modal();

$meow.prototype.createModal = function ({
    text,
    btns
} = {}) {
    for (let i = 0; i < this.length; i++) {

        // Чтобы при одинаковых data-target создавалось одно окно.
        if (this[0].getAttribute('data-target') === this[i].getAttribute('data-target') &&
            i != 0){
                continue;
            };

        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));


        // btns = {count: num, settings: [[text, classNames=[], close, cb]]}
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (btns.settings[j][3] && typeof (btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;

        modal.querySelector(".modal-footer").append(...buttons);
        document.body.appendChild(modal);
        $meow(this[i]).modal(true);
        $meow(this[i].getAttribute('data-target')).fadeIn(500);
    }
};