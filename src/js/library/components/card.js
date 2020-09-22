import $meow from '../core';

// ({settings, content});
// settings: {
//    count: 2,
//    classesWrapper: []
//},
// content : [{
//    href: ...,
//    modalId: ...,
//    datatarget: #exampleModal,
//    title: title,
//    desciption: desciption,
//    img: img,
//    classesCard: [],
// },{}]

$meow.prototype.createCards = function({content, commonModal}){
    const goods = document.createElement('div');
    goods.classList.add('goods', 'd-flex', 'f-space-around', 'f-wrap');
    
    let alt = 0;
    for (let j = 0; j < content.length; j++) {
        const card = document.createElement('div');
        card.classList.add('card', 'mt10');

        const modalId = content[j].modalId || 'none';
        
        card.innerHTML = `
            <img src="${content[j].img}" alt="photo-${alt}" class="card-img">
            <div class="card-body">
                <h5 class="card-title">${content[j].title}</h5>
                <p class="card-text">${content[j].desciption}</p>
                <a href="${content[j].href}" id="${modalId}" class="btn btn-primary" data-toggle="modal" data-target="${content[j].datatarget}">Link to</a>
            </div>
        `;

        alt++;

        goods.appendChild(card);
    }

    this[0].appendChild(goods);

    const cards = document.querySelectorAll('.card');

    const creatModal = (trigger, title, body) => {
        $meow(trigger).click((e) => {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            $meow(trigger).createModal({
                text: {
                    title,
                    body,
                },
                btns: {
                    count: 2,
                    settings: [
                        [
                            'Close',
                            ['btn-danger', 'mr10'],
                            true
                        ],
                        [
                            'Save changes',
                            ['btn-success'],
                            false,
                            () => {
                                alert('Данные сохранены');
                            }
                        ]
                    ]
                }
            });
        })
    }

    for (let j = 0; j < cards.length; j++) {
        if (content[j].modal) {
            const trigger = content[j].modal.trigger;
            creatModal(trigger, content[j].modal.title, content[j].modal.body);
        }
    }
    if (commonModal.modal.trigger) {
        const trigger = commonModal.modal.trigger;
        creatModal(trigger, commonModal.modal.title, commonModal.modal.body);
    }
}
