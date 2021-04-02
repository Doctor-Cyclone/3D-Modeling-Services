const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        body = document.querySelector('body');

    const handlerMenu = () => menu.classList.toggle('active-menu');	

    btnMenu.addEventListener('click', handlerMenu);

    body.addEventListener('click', (event) => {
        let target = event.target;

        if(target.closest('.menu')){
            menu.classList.add('active-menu');
        } else if(target.classList.contains('close-btn') || target.tagName === 'A'){
            menu.classList.remove('active-menu');
        } else if(!target.closest('menu')){
            menu.classList.remove('active-menu');
        }
    });
};

export default toggleMenu;