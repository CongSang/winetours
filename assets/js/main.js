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

//Open Close Modal Authentication
const modal = document.querySelector('.modal');
const modalContainer = modal.querySelector('.modal-container');
const btn_auth = document.querySelector('.top-bar__authentication');
const btn_auth_mobile = document.querySelector('.header__mobile-authent');
const btn_close = document.querySelector('.modal--close');

function showModal() {
    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}

btn_auth.addEventListener('click', showModal);
btn_auth_mobile.addEventListener('click', showModal);
btn_close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

//Login and Register
const btnLogin = document.querySelector('.modal-header__link--login');
const btnRegister = document.querySelector('.modal-header__link--register');

const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.register');

btnLogin.onclick = () => {
    btnLogin.classList.add('active');
    loginForm.classList.add('active');
    btnRegister.classList.remove('active');
    registerForm.classList.remove('active');
}

btnRegister.onclick = () => {
    btnLogin.classList.remove('active');
    loginForm.classList.remove('active');
    btnRegister.classList.add('active');
    registerForm.classList.add('active');
}