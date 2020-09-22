import './library/lib';
import $meow from './library/lib';

$meow('.container').createCards({
    content: [
        {
            href: '#',
            modalId: 'trigger',
            datatarget: '#exampleModal',
            title: 'title',
            desciption: 'desciption',
            img: 'https://photolemur.com/img/home/top-slider/after-1440.jpg',
            // modal: {
            //     trigger: '#trigger1',
            //     title: 'Modal Title',
            //     body: `1`,
            // },
        },
        {
            href: '#',
            modalId: 'trigger',
            datatarget: '#exampleModal',
            title: 'title',
            desciption: 'desciption',
            img: 'https://photolemur.com/img/home/top-slider/after-1440.jpg',
            // modal: {
            //     trigger: '#trigger2',
            //     title: 'Modal Title',
            //     body: `2`,
            // },
        },
        {
            href: '#',
            modalId: 'trigger',
            datatarget: '#exampleModal',
            title: 'title',
            desciption: 'desciption',
            img: 'https://photolemur.com/img/home/top-slider/after-1440.jpg',
            // modal: {
            //     trigger: '#trigger3',
            //     title: 'Modal Title',
            //     body: `3`,
            // },
        },
        {
            href: '#',
            modalId: 'trigger',
            datatarget: '#exampleModal',
            title: 'title',
            desciption: 'desciption',
            img: 'https://photolemur.com/img/home/top-slider/after-1440.jpg',
            // modal: {
            //     trigger: '#trigger3',
            //     title: 'Modal Title',
            //     body: `3`,
            // },
        },
        {
            href: '#',
            modalId: 'trigger',
            datatarget: '#exampleModal',
            title: 'title',
            desciption: 'desciption',
            img: 'https://klike.net/uploads/posts/2019-06/1560664221_1.jpg',
            // modal: {
            //     trigger: '#trigger3',
            //     title: 'Modal Title',
            //     body: `3`,
            // },
        },
    ],
    commonModal: {
        modal: {
            trigger: '#trigger',
            title: 'Modal Title',
            body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                        perferendis ea!Pariatur omnis aliquam quod
                        fugit quibusdam ? Nam, est aliquid ?`,
        },
        
    }
});

// $meow('#trigger').click(() => {
//     $meow('#trigger').createModal({
//         text: {
//             title: 'Modal Title',
//             body: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
//                 perferendis ea!Pariatur omnis aliquam quod
//                 fugit quibusdam ? Nam, est aliquid ?`
//         },
//         btns: {
//             count: 2,
//             settings: [
//                 [
//                     'Close',
//                     ['btn-danger', 'mr10'],
//                     true
//                 ],
//                 [
//                     'Save changes',
//                     ['btn-success'],
//                     false,
//                     () => {
//                         alert('Данные сохранены');
//                     }
//                 ]
//             ]
//         }
//     });
// })


