import "./about.css";
import AboutImg from "./img/CraftLunch.png";

export function startViewAbout() {
    let elements = createElements();
    elements = addInformation(elements);
    elements = addClass(elements);
    return parentElements(elements);
}

function createElements() {
    const content = document.createElement("div");
    const title = document.createElement("h1");
    const subTitle = document.createElement("p");
    const contentDescription = document.createElement("div");
    const imgAbout = document.createElement("img");
    const text = document.createElement("p");
    const contentInfo = document.createElement("div");
    const hours = document.createElement("p");
    const address = document.createElement("p");

    return [
        content,            // 0
        title,              // 1
        subTitle,           // 2
        contentDescription, // 3
        imgAbout,           // 4
        text,               // 5
        contentInfo,        // 6
        hours,              // 7
        address             // 8
    ];
}

function addInformation(elements) {
    elements[1].textContent = "About Us";
    elements[2].textContent = "The story behind the squarest plates in the world";
    elements[4].src = AboutImg;
    elements[4].alt = "CraftLunch kitchen";
    elements[5].textContent = "CraftLunch was born from a simple idea: food should be fun, creative and a little bit square. Every dish is made with care, so you can enjoy a meal that looks as good as it tastes.";
    elements[7].textContent = "Open every day, from 11am to 10pm";
    elements[8].textContent = "123 Square Street, Craft City";

    return elements;
}

function addClass(elements) {
    elements[0].classList.add("content");
    elements[1].classList.add("title");
    elements[2].classList.add("subTitle");
    elements[3].classList.add("contentDescription");
    elements[4].classList.add("img");
    elements[5].classList.add("text");
    elements[6].classList.add("contentInfo");
    elements[7].classList.add("info");
    elements[8].classList.add("info");

    return elements;
}

function parentElements(elements) {
    
    elements[6].append(elements[7], elements[8]);

    elements[3].append(elements[4], elements[5], elements[6]);

    elements[0].append(elements[1], elements[2], elements[3]);

    return elements[0];
}