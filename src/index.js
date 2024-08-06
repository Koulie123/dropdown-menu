import './style.css';

let dropDownMenuItems = document.querySelectorAll('.dropdown-menu-item');
dropDownMenuItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        if (item.classList.contains('not-visible')){
            item.classList.remove('not-visible');
        }
        if(!item.classList.contains('visible')){
            item.classList.add('visible');
        }
    });
    item.addEventListener(('mouseleave'), () => {
        if (!item.classList.contains('not-visible')){
            item.classList.add('not-visible');
        }
        if (item.classList.contains('visible')){
            item.classList.remove('visible');
        }

    });
});

