import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';



export const Fade = class extends Highway.Transition {
    in({ from, to, done }) {
        const brand = document.querySelector('.brand')
        const wpp = document.querySelector('.whatsapp')
        const tl = new TimelineLite();
        const footer = document.querySelector('.footer-content')
        tl.fromTo(to, 0.5, { left: '-100%', top: '50%' }, { left: '0%' })
            .fromTo(to, 0.5, { height: '1vh' },
                {
                    height: '100%', top: '10%', onComplete: function () {
                        done();
                    }
                })
            .fromTo(to.children[0], 0.4, { bottom: '-100%', opacity: 0 }, { bottom: '0%', opacity: 1 })
            .fromTo(brand, 0.5, { bottom: '-100%', opacity: 0 }, { top: '0.06vh', opacity: 1 })
            .fromTo(footer, 0.1, { opacity: 0 }, { opacity: 1 })
            .fromTo(wpp, 0.2, { opacity: 0 }, {opacity: 1 })
            // const target = document.querySelectorAll('[data-anime')
            // const animationClass = 'animate'


            // function animeScrol() {
            //     const windowTop = window.pageYOffset

            //     target.forEach(function (e) {
            //         if (windowTop > e.offsetTop*0.66) {
            //             e.classList.add(animationClass)
            //         } else {
            //             e.classList.remove(animationClass)
            //         }
            //     })
            // }



            window.addEventListener('scroll', function () {
                animeScrol();
            })
    }
    out({ from, done }) {
        from.remove()
        done();
    }
}



export const Slide = class extends Highway.Transition {
    in({ from, to, done }) {
        const tl = new TimelineLite();
        tl.fromTo(to, 1, { left: '-100%' }, {
            left: '0%', onComplete: function () {
                done();
            }
        })
            .fromTo(to.children[0], 2, { opacity: 0 }, { opacity: 1 })
    }
    out({ from, done }) {
        from.remove()
        done();
    }
}