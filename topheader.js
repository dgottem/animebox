document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function () {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    });


    const navAccIcon = document.getElementById('na-dropdown');
    const navAccContent = document.getElementById('na-dropdown-content');

    navAccIcon.addEventListener("click", function(){
        if(navAccContent.style.display === "none" || navAccContent.style.display === ""){
            navAccContent.style.display = "block";
        }else{
            navAccContent.style.display = "none";
        }
    });

    this.body.addEventListener("click", function(Event){
        if(Event.target !== navAccIcon && navAccContent && navAccContent.style.display === "block"){
            navAccContent.style.display = "none";
        }
    })

});
