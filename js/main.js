const nav = document.querySelector('nav');
const navBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav-item');
const footerYear = document.querySelector('.year')

const handleNav = () => {
    nav.classList.toggle('active')
    navBtn.classList.toggle('is-active')
    handleNavItemsAnimation();
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('active')
            navBtn.classList.remove('is-active')
            item.classList.remove('nav-items-animation')
        })
    })
}
navBtn.addEventListener('click', handleNav);

const handleNavItemsAnimation = () => {
    let delayTime = 0;
    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year
}
handleCurrentYear();

// const navItemsDelete = () => {
//     allNavItems.forEach(item => {
//         if (item.classList.contains('nav-items-animation')) {
//             item.classList.remove('nav-items-animation')
//         }
//     })
// }
// allNavItems.addEventListener('click', navItemsDelete)
const navItemsDelete = () => {
    allNavItems.forEach(item => {
        if (item.classList.contains('nav-items-animation')) {
            item.classList.remove('nav-items-animation')
        }
    })
}

allNavItems.forEach((item) => {
    item.addEventListener('click', navItemsDelete)
})