//* Image hover effect GSAP

const gsapItem = gsap.utils.toArray('.header-item')

gsapItem.forEach(gsIt => {
    const easing = "bounce.out"
    const letter = gsIt.querySelectorAll('.letter');

    gsIt.addEventListener('mouseenter', function () {

        gsap.to(letter, {
            opacity: 1,
            duration: 0.075,
            stagger: {
                from: "random",
                repeat: 5,
                each: 0.02
            },
            ease: easing
        })

    });

    gsIt.addEventListener('mouseleave', function () {

        gsap.to(letter, {
            opacity: 0,
            duration: 0.075,
            stagger: {
                from: "random",
                repeat: 5,
                each: 0.02
            },
            ease: easing
        })

    });

});