/* Animation hamburguer */

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

/* Read More Event */
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".services-box .btn");
    
    const dropdowns = document.querySelectorAll(".nav-responsive .dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", () => {

            const languages = dropdown.querySelector(".language");
            
            if (languages.style.display === "block") {
                languages.style.display = "none";
            } else {
                languages.style.display = "block";
            }
        });
    });
    
    readMoreButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const servicesBox = button.closest(".services-box");
            const paragraph = servicesBox.querySelector("p");

            const isExpanded = paragraph.getAttribute("data-expanded") === "true";

            if (isExpanded) {
                paragraph.style.display = "-webkit-box";
                paragraph.style.overflow = "hidden";
                paragraph.style.textOverflow = "ellipsis";
                paragraph.setAttribute("data-expanded", "false");

                if (button.textContent === "Read less") {
                    button.textContent = "Read more";
                } else {
                    button.textContent = "Saiba mais";
                }
            } else {
                paragraph.style.display = "block";
                paragraph.style.overflow = "visible";
                paragraph.style.textOverflow = "unset";
                paragraph.setAttribute("data-expanded", "true");
                
                if (button.textContent === "Read more") {
                    button.textContent = "Read less";
                } else {
                    button.textContent = "Saiba menos";
                }
            }
        });
    });
});
