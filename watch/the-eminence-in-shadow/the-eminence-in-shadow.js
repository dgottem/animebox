document.addEventListener('DOMContentLoaded', function () {

    const seriesName = "the_eminence_in_shadow";
    const savedSrc = localStorage.getItem(`${seriesName}_episodeSrc`);

    if (savedSrc) {
        document.getElementById('video-frame').src = savedSrc;
    }

    window.changeEpisode = (src) => {
        const videoFrame = document.getElementById('video-frame');
        videoFrame.src = src;

        localStorage.setItem(`${seriesName}_episodeSrc`, src);
    }

    let currentEpisode = parseInt(localStorage.getItem(`${seriesName}_currentEpisode`)) || 1;
    const totalEpisodes = 20;

    const toPreviousVid = document.getElementById('to-previous-vid');
    const toNextVid = document.getElementById('to-next-vid');

    const currentWatch = document.getElementById('current-watch');
    currentWatch.textContent = `Episode ${currentEpisode}`;

    const episodeLinks = document.querySelectorAll('.ep-li-item a');
    episodeLinks.forEach(link => {
        link.addEventListener('click', function() {
            const episodeNumber = parseInt(link.getAttribute('data-epnum'));
            currentWatch.textContent = `Episode ${episodeNumber}`;
            localStorage.setItem(`${seriesName}_currentEpisode`, episodeNumber);
        });
    });

    toPreviousVid.addEventListener('click', function() {
        const currentEpisode = parseInt(currentWatch.textContent.split(' ')[1]);
        if (currentEpisode > 1) {
            const previousEpisode = currentEpisode - 1;
            currentWatch.textContent = `Episode ${previousEpisode}`;
            localStorage.setItem(`${seriesName}_currentEpisode`, previousEpisode);
            document.querySelector(`.ep-li-item:nth-child(${previousEpisode}) a`).click();
        }
    });

    toNextVid.addEventListener('click', function() {
        const currentEpisode = parseInt(currentWatch.textContent.split(' ')[1]);
        if (currentEpisode < totalEpisodes) {
            const nextEpisode = currentEpisode + 1;
            currentWatch.textContent = `Episode ${nextEpisode}`;
            localStorage.setItem(`${seriesName}_currentEpisode`, nextEpisode);
            document.querySelector(`.ep-li-item:nth-child(${nextEpisode}) a`).click();
        }
    });

});
