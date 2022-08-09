let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar1');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}