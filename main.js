document.addEventListener('DOMContentLoaded', function () {

    const userRequest = document.getElementById('user-request');

    const darkOverlay = document.querySelector('.dark-overlay');

    const userRequestDiv = document.querySelector('.user-request-div');

    const closeRequestDiv = document.querySelector('.close-user-request');

    userRequest.addEventListener('click', () => {
        
        const darkOverlayDisplay = window.getComputedStyle(darkOverlay).getPropertyValue('display');
        const userRequestDivDisplay = window.getComputedStyle(userRequestDiv).getPropertyValue('display');

        if(darkOverlayDisplay === "none" && userRequestDivDisplay === "none"){
            darkOverlay.style.display = "block";
            userRequestDiv.style.display = "block";
        }

    });
    
    closeRequestDiv.addEventListener('click', () => {

        const darkOverlayDisplay = window.getComputedStyle(darkOverlay).getPropertyValue('display');
        const userRequestDivDisplay = window.getComputedStyle(userRequestDiv).getPropertyValue('display');

        if(darkOverlayDisplay === "block" && userRequestDivDisplay === "block"){
            darkOverlay.style.display = "none";
            userRequestDiv.style.display = "none"; 
        }
        
    });

});