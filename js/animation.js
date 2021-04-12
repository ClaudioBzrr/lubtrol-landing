const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'


function animeScrol() {
    const windowTop = window.pageYOffset

    target.forEach(function (e) {
        if (windowTop > e.offsetTop *1.25) {
            e.classList.add(animationClass)
        } else {
            e.classList.remove(animationClass)
        }
    })
}



window.addEventListener('scroll', function () {
    animeScrol();
})