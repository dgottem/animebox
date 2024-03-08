document.addEventListener('DOMContentLoaded', function () {

    const animePlot = document.querySelector('.ani-desc-plot');
    const showPlot = document.querySelector('.ani-desc-status > p:last-child');
    
    showPlot.addEventListener('click', () => {

        animePlot.classList.toggle('ani-plot-toggle');

        if(showPlot.textContent === "[see more]"){
            showPlot.textContent = "[see less]";
        }else{
            showPlot.textContent = "[see more]";
        }

    });

});