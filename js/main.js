let currentYearIndex = 0; // Índice inicial de año

const years = [
  "1995 - 1996",
  "1996 - 1999",
  "2000 - 2005",
  "2006 - 2008",
  "2009 - 2014",
  "2015",
];

const yearItems = document.querySelectorAll("li");

const updateVisibleYear = () => {
  yearItems.forEach((item, index) => {
    item.classList.toggle("visible", index === currentYearIndex);
  });
};

updateVisibleYear();

// Navegación del menú
document.querySelectorAll("#year-menu a").forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    currentYearIndex = index;
    updateVisibleYear();
  });
});

updateVisibleYear();
