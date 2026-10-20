import "./menu.css";
import Hamburguer from "./img/foods/Hamburguer.png";
import Bolo from "./img/foods/Bolo.png";
import Leite from "./img/foods/Leite.png";
import Pizza from "./img/foods/Pizza.png";
import Queijo from "./img/foods/Queijo.png";
import Sopa from "./img/foods/Sopa.png";
import Robombole from "./img/foods/RoCombole.png";
import Donots from "./img/foods/Donots.png";
import Panqueca from "./img/foods/Panqueca.png";

export function startViewMenu() {
    return createElements();
}

function createElements() {
    const content = document.createElement("div");
    const contentFoods = document.createElement("div");
    const title = document.createElement("h1");
    const subTitle = document.createElement("p");


    content.classList.add("content")
    contentFoods.classList.add('content-foods');
    title.classList.add('title');
    subTitle.classList.add('subTitle');


    contentFoods.append(
        createFoodImage(Hamburguer),
        createFoodImage(Bolo),
        createFoodImage(Leite),
        createFoodImage(Pizza),
        createFoodImage(Queijo),
        createFoodImage(Sopa),
        createFoodImage(Robombole),
        createFoodImage(Donots),
        createFoodImage(Panqueca)
    );

    title.textContent = "Menu";
    subTitle.textContent = "Choose what you want to order";

    content.append(title, contentFoods, subTitle);

    return content;
}

function createFoodImage(src) {
    const img = document.createElement("img");
    img.classList.add('imgFood')
    img.src = src;
    return img;
}