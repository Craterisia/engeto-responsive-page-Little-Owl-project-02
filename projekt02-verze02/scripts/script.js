const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".navigace");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-xmark");
  menuList.classList.toggle("show-menu");
});

// menuIcon.addEventListener("click", () => {
//   if (hamburgerIcon.classList[1] === "fa-bars") {
//     hamburgerIcon.classList.add("fa-xmark");
//     hamburgerIcon.classList.remove("fa-bars");
//     menuList.style.display = "block";
//   } else {
//     hamburgerIcon.classList.add("fa-bars");
//     hamburgerIcon.classList.remove("fa-xmark");
//     menuList.style.display = "none";
//   }
// });
