import closePopup from './closePopup';
import openPopup from './openPopup';

const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content'),
        scrollWidth = document.documentElement.scrollWidth,
        menu = document.querySelector('menu');

    //Открытие//////////////////////////////////////////////////////////////////
    popupBtn.forEach( item => {
        item.addEventListener('click', () => {
            if(menu.classList.contains('active-menu')){
                menu.classList.remove('active-menu');
            }
            openPopup();
        });
    });

    //Закрытие/////////////////////////////////////////////////////////////////
    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
            closePopup();
        } else {
            if(!target.closest('.popup-content')){
                closePopup();
            }
        }			
    });
};

export default togglePopup;