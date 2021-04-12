const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'


function animeScrol() {
    const windowTop = window.pageYOffset

    target.forEach(function (e) {
        if (windowTop > e.offsetTop * 0.66) {
            e.classList.add(animationClass)
        } else {
            e.classList.remove(animationClass)
        }
    })
}



window.addEventListener('scroll', function () {
    animeScrol();
})