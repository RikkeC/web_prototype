/*****************************burgermenu************************/
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgericon").addEventListener("click", toggleMenu);

    document.querySelector("#down1").addEventListener("click", dropdown_tema1);
}

function toggleMenu() {

    console.log("toggleMenu");
    document.querySelector("section").classList.toggle("hidden_none");
    document.querySelector("#togglemenu").classList.toggle("hidden");

    document.querySelector("#headerright").classList.toggle("hidden");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);

}

function dropdown_tema1() {
    console.log("dropdown_tema1");
    document.querySelector("#dropdown_tema1").classList.toggle("hidden_none");
    document.querySelector("#down1").classList.toggle("hidden");
    document.querySelector("#op").classList.toggle("hidden");
    document.querySelector("#op").addEventListener("click", dropdown_tema1);
}
//
//function backAgain() {
//    console.log("backAgain");
//    document.querySelector("#togglemenu").classList.add("hidden");
//
//
//    document.querySelector(".title").classList.remove("hidden");
//    document.querySelector("#dropdown_tema1").classList.add("hidden_none");
//}
