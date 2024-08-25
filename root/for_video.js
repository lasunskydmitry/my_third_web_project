const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video-player__video')
const playButton = videoPlayer.querySelector('.video-player__overlay-1-play-button')
const pauseButton = videoPlayer.querySelector('.video-player__overlay-2-pause-button')
const playOverlay = videoPlayer.querySelector('.video-player__overlay-1')
const pauseOverlay = videoPlayer.querySelector('.video-player__overlay-2')

playButton.addEventListener('click', (event) => {
        video.play()
        //event.target.classList.add('hide');
        //в этом примере мы добавляем класс hide к элементу,
        //на котором произошло событие click,
        //используя свойство target объекта события.        
        playOverlay.classList.add('hide');
        
})

pauseButton.addEventListener('click', (event) => {
    video.pause()        
    pauseOverlay.classList.add('hide');
})

video.onclick = function (e) {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
        pauseOverlay.classList.add('hide');
    }
}

/*
function toggleVideoStatus () {
    if (video.paused) {
        video.play();
        playOverlay.classList.add('hide');
    } else {
        video.pause();
    }
}
playButton.addEventListener('click', toggleVideoStatus)
*/

video.addEventListener('ended',videoHandler,false);
function videoHandler() {
    playOverlay.classList.remove('hide');
}