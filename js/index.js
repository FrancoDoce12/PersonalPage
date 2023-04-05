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
    '.hidden-up-1, .hidden-up-2, .hidden-up-3, .img-hidden-left, .img-hidden-right, .hidden-left-1, .hidden-left-2, .progresive-gradient-text-gray-1'
)
//console.log(elemenst_to_animate)
elemenst_to_animate.forEach((el) => {
    observer.observe(el)
})

// drop dawn code

const isDroped = {value:false}

const dropdawnMenu = document.querySelector(".dropdownMenu")
const dropdawnButton = document.querySelector("#dropdownButton")

dropdawnButton.addEventListener("click", () =>{
    if (isDroped.value){
        // close the dropbox
        dropdawnMenu.classList.remove("dropdownMenu-show")
    } else {
        // open the dropbox
        dropdawnMenu.classList.add("dropdownMenu-show")
    }
    isDroped.value = !isDroped.value

})

document.addEventListener('click', (event) => {
    if (!dropdawnButton.contains(event.target)) {
        // The click occurred outside the container element
        isDroped.value = false
        // close the dropbox
        dropdawnMenu.classList.remove("dropdownMenu-show")
        console.log('Click outside container');
    }
});


