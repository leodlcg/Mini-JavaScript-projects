import "./home.css";
import CraftLunch from "./img/CraftLunch.png";

export function startViewHome(){

    return parentElements(addInformation(addClass(createElements())));

}

function createElements(){

    const content = document.createElement("div");
    const title = document.createElement("h1");
    const imgMain = document.createElement("img");
    const subTitle = document.createElement("p");
    const contentDescription = document.createElement("div");

    return ([content, title, imgMain, subTitle, contentDescription]);

}

function addInformation(elements){

    elements[1].textContent = "CraftLunch";
    elements[2].src = CraftLunch;
    elements[3].textContent = "Here you'll find the world's squarest plates! Enter a world of creation and fantasy! At CraftLunch, you'll make your dreams come true!";

    return elements;

}

function addClass(elements){

    elements[0].classList.add('content')
    elements[1].classList.add('title')
    elements[2].classList.add('img')
    elements[3].classList.add('subTitle')
    elements[4].classList.add('contentDescription')

    return elements;

}

function parentElements(elements){

    elements[4].append(elements[2], elements[3])
    elements[0].append(elements[1], elements[4])

    return elements[0];

}