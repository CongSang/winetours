const slider = document.querySelectorAll('.slider-content .slider');
let index = 0;

const loadCurrentSlider = () => {
    slider[index].classList.add('active');
}

loadCurrentSlider()

const next = () => {
    index++;
    if(index > slider.length - 1) {
        document.querySelector('.slider-content .slider.active').classList.remove('active')
        index = 0;
        loadCurrentSlider()
    } else {
        document.querySelector('.slider-content .slider.active').classList.remove('active')
        loadCurrentSlider()
    }
}

const prev = () => {
    index--;
    if(index < 0) {
        document.querySelector('.slider-content .slider.active').classList.remove('active')
        index = slider.length - 1;
        loadCurrentSlider()
    } else {
        document.querySelector('.slider-content .slider.active').classList.remove('active')
        loadCurrentSlider()
    }
}

setInterval(() => {
    next();
}, 5000)
