const toggleMenuButton = document.getElementById("toggle-menu");
const yearMenu = document.getElementById("year-menu");

toggleMenuButton.addEventListener("click", () => {
    // Cambia la visibilidad del menú
    yearMenu.classList.toggle("visible");

    // Cambia el texto del botón dependiendo del estado del menú
    if (yearMenu.classList.contains("visible")) {
        toggleMenuButton.textContent = "✖"; // Cambia a X cuando está abierto
    } else {
        toggleMenuButton.textContent = "☰"; // Cambia a ☰ cuando está cerrado
    }
});
