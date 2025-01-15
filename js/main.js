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

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Previne comportamento padrão do link
            const servicesBox = button.closest(".services-box");
            const paragraph = servicesBox.querySelector("p");

            // Verifica o estado atual usando um atributo de dados
            const isExpanded = paragraph.getAttribute("data-expanded") === "true";

            if (isExpanded) {
                // Recolher texto
                paragraph.style.display = "-webkit-box";
                paragraph.style.overflow = "hidden";
                paragraph.style.textOverflow = "ellipsis";
                paragraph.setAttribute("data-expanded", "false");
                button.textContent = "Read more";
            } else {
                // Expandir texto
                paragraph.style.display = "block";
                paragraph.style.overflow = "visible";
                paragraph.style.textOverflow = "unset";
                paragraph.setAttribute("data-expanded", "true");
                button.textContent = "Read less";
            }
        });
    });
});