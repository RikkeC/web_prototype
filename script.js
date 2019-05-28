/*****************************burgermenu************************/
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgericon").addEventListener("click", toggleMenu);

    document.querySelector("#down1").addEventListener("click", dropdown_tema1);
}

function toggleMenu() {

    console.log("toggleMenu");
    document.querySelector("#togglemenu").classList.remove("hidden");

    document.querySelector(".title").classList.add("hidden");

    document.querySelector("#menuknap").addEventListener("click", backAgain);

}

function dropdown_tema1() {
    console.log("dropdown_tema1");
    document.querySelector("#dropdown_tema1").classList.remove("hidden_none");
    document.querySelector("#down1").addEventListener("click", backAgain);

}

function backAgain() {
    console.log("backAgain");
    document.querySelector("#togglemenu").classList.add("hidden");


    document.querySelector(".title").classList.remove("hidden");
    document.querySelector("#dropdown_tema1").classList.add("hidden_none");
}
