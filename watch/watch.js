document.addEventListener('DOMContentLoaded', function () {

    // Retrieve saved src value from localStorage
    const savedSrc = localStorage.getItem('episodeSrc');

    // Set iframe src to saved value if it exists
    if (savedSrc) {
        document.getElementById('video-frame').src = savedSrc;
    }

    window.changeEpisode = (src) => {
        const videoFrame = document.getElementById('video-frame');
        videoFrame.src = src;

        // Save src value to localStorage
        localStorage.setItem('episodeSrc', src);
    }

    let currentEpisode = parseInt(localStorage.getItem('currentEpisode')) || 1; // Initial episode number, defaults to 1 if not found in localStorage
    const totalEpisodes = 20; // Assuming there are 20 episodes in total

    const toPreviousVid = document.getElementById('to-previous-vid');
    const toNextVid = document.getElementById('to-next-vid');

    const currentWatch = document.getElementById('current-watch');
    currentWatch.textContent = `Episode ${currentEpisode}`;

    // Event listener for clicking on episode links
    const episodeLinks = document.querySelectorAll('.ep-li-item a');
    episodeLinks.forEach(link => {
        link.addEventListener('click', function() {
            const episodeNumber = parseInt(link.getAttribute('data-epnum'));
            currentWatch.textContent = `Episode ${episodeNumber}`;
            localStorage.setItem('currentEpisode', episodeNumber); // Save current episode number to localStorage
        });
    });

    // Event listener for clicking on the previous episode icon
    toPreviousVid.addEventListener('click', function() {
        if (currentEpisode > 1) {
            currentEpisode--;
            currentWatch.textContent = `Episode ${currentEpisode}`;
            localStorage.setItem('currentEpisode', currentEpisode); // Save current episode number to localStorage
            // Simulate click on the anchor tag for the previous episode
            document.querySelector(`.ep-li-item:nth-child(${currentEpisode}) a`).click();
        }
    });

    // Event listener for clicking on the next episode icon
    toNextVid.addEventListener('click', function() {
        if (currentEpisode < totalEpisodes) {
            currentEpisode++;
            currentWatch.textContent = `Episode ${currentEpisode}`;
            localStorage.setItem('currentEpisode', currentEpisode); // Save current episode number to localStorage
            // Simulate click on the anchor tag for the next episode
            document.querySelector(`.ep-li-item:nth-child(${currentEpisode}) a`).click();
        }
    });


});
