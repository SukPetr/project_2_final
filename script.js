const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  console.log("Bylo kliknuto");
});

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bolt") {
    hamburgerIcon.classList.add("fa-skull-crossbones");
    hamburgerIcon.classList.remove("fa-bolt");
    menuList.style.display = "block"; // Přidali jsme
  } else {
    hamburgerIcon.classList.add("fa-bolt");
    hamburgerIcon.classList.remove("fa-skull-crossbones");
    menuList.style.display = "none"; // Přidali jsme
  }
});
