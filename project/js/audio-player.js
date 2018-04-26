var playing = false;
var duration;
var audio = document.getElementById('player'); //html audio element
var playButton = document.getElementById('play-button');
var playhead = document.getElementById('playhead');

audio.addEventListener('canplaythrough', () => { duration = audio.duration; }, false);
audio.addEventListener('timeupdate', timeUpdate);
playButton.addEventListener('click', musicPlay, false);


function musicPlay(){
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

function timeUpdate() {
    document.body.style
    var percent = 100 * (audio.currentTime / duration);
    playhead.style.marginLeft = percent + "%";
}