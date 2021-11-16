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