export default function (arrayOfDropdownItems) {
    arrayOfDropdownItems.forEach((item) => {
        const menuLabel = item.querySelector('.menu-label');
        const innerItems = item.querySelectorAll('.inner-dropdown-item');
    
        menuLabel.addEventListener('mouseenter', () => {
            innerItems.forEach((child) => {
                child.classList.remove('not-visible');
                child.classList.add('visible');
            });
        });
    
        menuLabel.addEventListener('mouseleave', () => {
            innerItems.forEach((child) => {
                child.classList.remove('visible');
                child.classList.add('not-visible');
            });
        });
    });
}