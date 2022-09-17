let responsiveNavButton = document.getElementById("responsive-nav-button");
let responsiveNavBox = document.getElementsByClassName("responsive-nav-box");
let responsiveNavContainer = document.getElementsByClassName("responsive-nav-container");


responsiveNavButton.onclick = function () {
    responsiveNavBox[0].classList.toggle("is-active");
    document.getElementsByTagName("html")[0].classList.toggle("responsive-nav-open");
};