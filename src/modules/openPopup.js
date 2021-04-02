const openPopup = () => {
    const  popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content'),
        scrollWidth = document.documentElement.scrollWidth;

    const widthLimitOpen = (scrollWidth) => {
        if(scrollWidth < 768){
            popup.style.display = 'block';
        } else {
            popupContent.style.transform = 'scale(0)';
            popup.style.display = 'block';
            setTimeout(() => {
                popupContent.style.transition = 'all .2s linear';
                popupContent.style.transform = 'scale(1)';
            }, 100);
        }
    };

    window.addEventListener('resize', () => {
        const scrollWidth = document.documentElement.scrollWidth;
        if(scrollWidth < 768){
            popupContent.style.transform = 'scale(1)';
            popup.style.display = 'block';
        }
    });

    widthLimitOpen(scrollWidth);
};

export default openPopup;