/*****************************burgermenu************************/
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgericon").addEventListener("click", toggleMenu);

}

function toggleMenu() {

    console.log("toggleMenu");
    document.querySelector("#togglemenu").classList.remove("hidden");

    document.querySelector(".title").classList.add("hidden");

    document.querySelector("#menuknap").addEventListener("click", backAgain);

}

function backAgain() {
    console.log("backAgain");
    document.querySelector("#togglemenu").classList.add("hidden");

    document.querySelector(".title").classList.remove("hidden");
}
