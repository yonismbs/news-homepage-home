const openBtnBalise = document.getElementById("openBtn");
const mySideNavBalise = document.getElementById("mySidenav");
const closeBtnBalise = document.getElementById("closeBtn");

openBtnBalise.addEventListener("click", () => {
    mySideNavBalise.style.right = "0px";  // Lance la transition de la sidebar
    overlay.style.visibility = "visible";  // Affiche l'overlay
    overlay.style.opacity = "1";  // Le rendre visible avec transition
});

closeBtnBalise.addEventListener("click", () => {
    mySideNavBalise.style.right = "-250px";  // Lance la transition inverse de la sidebar
    overlay.style.visibility = "hidden";  // Cache l'overlay
    overlay.style.opacity = "0";  // Le rendre invisible avec transition
});