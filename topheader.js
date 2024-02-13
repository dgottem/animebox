document.addEventListener('DOMContentLoaded', function () {
    const screenWidth = window.innerWidth;

    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('nav-open');
    });


    const navAccIcon = document.getElementById('na-dropdown-icon');
    const navAccContent = document.getElementById('na-dropdown-content');

    navAccIcon.addEventListener('click', function () {
        navAccContent.classList.toggle('na-dc-open');
    });

    const searchIcon1 = document.getElementById('search-icon_1');
    const searchContainer = document.querySelector('.search-box-container');

    const spotlightDiv = document.getElementById('spotlight');

    searchIcon1.addEventListener('click', function () {
        const searchContainerCD = window.getComputedStyle(searchContainer).getPropertyValue('display');
    
        if(searchContainerCD === "none" && screenWidth < 1281){
            searchContainer.style.display = "flex";
            spotlightDiv.style.marginTop = 45 + "px";
        }else if(searchContainerCD === "none" && screenWidth >= 1281){
            searchContainer.style.display = "flex";
            spotlightDiv.style.marginTop = 40 + "px";
        }else{
            searchContainer.style.display = "none";
            spotlightDiv.style.marginTop = 0 + "px";
        }
    });
    

    const bellIcon = document.getElementById('bell-icon');
    const notiModal = document.getElementById('noti-modal');

    bellIcon.addEventListener("click", function () {
        console.log("Bell icon clicked");
        notiModal.classList.toggle('noti-modal-open');
    });
     

});