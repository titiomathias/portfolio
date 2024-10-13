const header = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
    if(window.scrollY >= 150){
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})