document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('nav-open');
    });


    const navAccIcon = document.getElementById('na-dropdown');
    const navAccContent = document.getElementById('na-dropdown-content');

    navAccIcon.addEventListener('click', function () {
        navAccContent.classList.toggle('na-dc-open');
    });

    const searchIcon1 = document.getElementById('search-icon_1');
    const searchContainer = document.querySelector('.search-box-container');

    searchIcon1.addEventListener('click', function () {
        if(searchContainer.style.display === "flex"){
            searchContainer.style.display = "none";
        }else{
            searchContainer.style.display = "flex";
        }
    });

    const bellIcon = document.getElementById('bell-icon');
    const notiModal = document.getElementById('noti-modal');

    bellIcon.addEventListener('click', function () {
        if(notiModal.style.left !== 0 + "px"){
            notiModal.style.left = 0;
        }else{
            notiModal.style.left = -100 + "%";
        }
    });
    
});