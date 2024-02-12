document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('nav-open');
    });


    const navAccIcon = document.getElementById('na-dropdown');
    const navAccContent = document.getElementById('na-dropdown-content');

    navAccIcon.addEventListener('click', function() {
        navAccContent.classList.toggle('na-dc-open');
    })

});