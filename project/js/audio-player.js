var playing = false;
var audio = document.querySelector('.player'); //html audio element
var playButton = document.querySelector('#play-button');

playButton.addEventListener('click', musicPlay);

function musicPlay(){
    console.log("PLAYING");
    if (!playing) {
        playing = true;
        playButton.className = "fas fa-pause"
        audio.play();
    } else {
        playing = false;
        playButton.className = "fas fa-play"
        audio.pause();
    }
}