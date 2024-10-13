const sidenav = document.querySelector(".side-navbar");

function showNavBar() {
    sidenav.style.transform = "translate(0px)";
    sidenav.style.opacity = "1";
}

function hideNavBar() {
    sidenav.style.transform = "translate(-200px)";
    sidenav.style.opacity = "0";
}