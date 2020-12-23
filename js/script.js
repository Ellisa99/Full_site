
// меняем  меню динамически
import calculator from './modules/calc';
import cards from './modules/cardsMenu';
import modal from './modules/modalWindow';
import post from './modules/postWindow';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import  {openModal} from './modules/modalWindow';


document.addEventListener('DOMContentLoaded', () =>{
    const modalTimerId = setTimeout(() => openModal('.modal-window', modalTimerId), 30000);
calculator();
cards();
modal('[data-modal]', '.modal-window', modalTimerId);
post(modalTimerId);
slider();
tabs();
timer();

//модальное окно
//карточки
// таймер обратного отсчета
//Post
 //SliderNavigation
//Calc
});

