const btnPlayVideo = document.querySelector('.btn-play-video');
const content = document.querySelector('.content');
const video = document.querySelector('video');
const overlayVideo = document.querySelector('.overlay-video');

btnPlayVideo.onclick = () => {
    overlayVideo.classList.add('active')
    video.play();
}

content.addEventListener('click', function(event) {
    event.stopPropagation();
})

overlayVideo.onclick = () => {
    overlayVideo.classList.remove('active')
    video.pause();
}