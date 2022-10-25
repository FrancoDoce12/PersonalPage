// code releted to animations:

// code related to animations on scroll:

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // else {
        //     entry.target.classList.remove('show')
        // }
    })
})

const elemenst_to_animate = document.querySelectorAll(
    '.hidden-up-1, .hidden-up-2, .hidden-up-3, .img-hidden-left, .img-hidden-right, .hidden-left-1, .hidden-left-2'
    )
console.log(elemenst_to_animate)
elemenst_to_animate.forEach((el) => {

    observer.observe(el)
})
