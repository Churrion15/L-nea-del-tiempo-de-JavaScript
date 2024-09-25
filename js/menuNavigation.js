document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("#year-menu li");
  const timelineItems = document.querySelectorAll("#timeline-content li");


  timelineItems[0].classList.add("visible");

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {

      timelineItems.forEach((el) => {
        el.classList.remove("visible");
      });

      timelineItems[index].classList.add("visible");

      const target = timelineItems[index];
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
