import "./style.css";
import { startViewHome } from "./home.js"
import { startViewMenu } from "./menu.js"
import { startViewAbout } from "./about.js"

document.getElementById("content").replaceChildren(startViewHome());

document.getElementById("nav-home").addEventListener("click", (e) => {

    document.getElementById("content").replaceChildren(startViewHome());

})

document.getElementById("nav-menu").addEventListener("click", (e) => {

    document.getElementById("content").replaceChildren(startViewMenu());

})

document.getElementById("nav-about").addEventListener("click", (e) => {

    document.getElementById("content").replaceChildren(startViewAbout());

})