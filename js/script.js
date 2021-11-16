import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/calculator';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {

    tabs();
    modal('[data-modal]', '.modal');
    timer();
    cards();
    forms();

});

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // showSlides(slideIndex);

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');
    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         total.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));
// const names = ['Sam', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter((name) => {
//     return name.length < 5;
// });

// console.log(names);
// console.log(shortNames);

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map((answer) => {
//     const lower = answer.toLowerCase();
//     return answer.charAt(0).toUpperCase() +
//         lower.slice(1);
// });

// console.log(result);

// const some = [4, 'qwq', 'asdfds'];
// console.log(some.some(item => typeof(item) === 'number'));

// const every = [4, 'qwq', 'asdfds'];
// console.log(every.every(item => typeof(item) === 'number'));

// const arr = [4, 5, 11, 4, 22];
// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal'
// };

// const newArr = Object.entries(obj)
//     .filter(item => item[1] === 'persone')
//     .map(item => item[0])
//     .reduce((sum, current) => `${sum}, ${current}`);
// console.log(newArr);