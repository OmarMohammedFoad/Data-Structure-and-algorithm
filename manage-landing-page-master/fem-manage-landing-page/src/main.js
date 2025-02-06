const toggles = document.querySelectorAll(".dropdown-toggle");
let flag = false;
toggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    this.classList.toggle("active");
    const dropDownMenu = this.querySelector(".dropdown-menu");

    dropDownMenu.classList.toggle("active");
  });
});
