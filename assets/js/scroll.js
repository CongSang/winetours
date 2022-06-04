const onTheTop = document.querySelector('.scroll-top')
const topBarPc = document.querySelector('.top-bar')
const navbar_mobile = document.querySelector('.header__mobile-nav')


document.onscroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    console.log(scrollTop)

    if (scrollTop > 200) {
        onTheTop.classList.add('active')
    } else {
        onTheTop.classList.remove('active')
    }

    if (scrollTop > 20) {
        navbar_mobile.classList.add('onTop')
    } else {
        navbar_mobile.classList.remove('onTop')
    }
}

onTheTop.onclick = () => {
    navbar_mobile.classList.remove('onTop');
    topBarPc.scrollIntoView(
        {
            behavior: "smooth",
            block: "end", 
            inline: "nearest"
        }
    )
    navbar_mobile.scrollIntoView(
        {
            behavior: "smooth",
            block: "end", 
            inline: "nearest"
        }
    )
}