const header = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    if(window.scrollY >= 450){
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})