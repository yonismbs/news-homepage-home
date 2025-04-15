const openBtnBalise = document.getElementById("openBtn");
const mySideNavBalise = document.getElementById("mySidenav");
const closeBtnBalise = document.getElementById("closeBtn");

openBtnBalise.addEventListener("click", () => {
    mySideNavBalise.style.right = "0px";
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";  
});

closeBtnBalise.addEventListener("click", () => {
    mySideNavBalise.style.right = "-250px";
    overlay.style.visibility = "hidden";  
    overlay.style.opacity = "0";  
});