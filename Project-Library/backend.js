import { Book } from "./Book.js";

const books = [];

//O PARAMETRO event(ou qualquer nome que queremos definir) é um objeto criado pelo proprio navegador para nos enviar os dados do formulário!
//Precisa ser sempre o primeiro parametro que é onde o navegador vai jogar o objeto!
document.getElementById("form-register-book").addEventListener("submit", (event) => {

    //Principais metodos de event:
    //event.target; - <button> (onde você clicou)
    //event.currentTarget; <form> (onde o listener está)

    console.log(event.constructor.name); //Verificar qual o objeto do tipo de evento.
    event.preventDefault(); //Metodo já embutido em event. Não atualiza a pagina.

    console.log(event.target.category.value); //value obtem o valor dentro do input.
    //ou
    console.log(document.getElementById("form-register-book").category.value);

    const author = document.getElementById("form-register-book").author.value;
    const category = document.getElementById("form-register-book").category.value;
    const numberPages = document.getElementById("form-register-book").numberPages.value;
    const read = document.getElementById("form-register-book").read.checked;

    cleanInputs();
    createBook(author, category, numberPages, read);
    viewBook();

})


function createBook(author, category, numberPages, read){


    const book = new Book(author, category, numberPages, read);

    books.push(book);

}

function cleanInputs(){

    const formInputs = document.getElementById("form-register-book").querySelectorAll("input");

    for(let i of formInputs){
    
         i.type == "checkbox" ? i.checked = false : i.value = "";

    }

}

function viewBook(){

    cleanViewBook();

    for(let i = 0; i < books.length; i++){
    
        const author = document.createElement("h3");
        author.textContent = books[i].author;
        author.classList.add("text-view-book");
        document.getElementById("div-view-book").appendChild(author);

        const category = document.createElement("h3");
        category.textContent = books[i].category;
        category.classList.add("text-view-book");
        document.getElementById("div-view-book").appendChild(category);

        const numberPages = document.createElement("h3");
        numberPages.textContent = books[i].numberPages;
        numberPages.classList.add("text-view-book");
        document.getElementById("div-view-book").appendChild(numberPages);

        const read = document.createElement("h3");
        read.textContent = books[i].read;
        read.classList.add("text-view-book");
        document.getElementById("div-view-book").appendChild(read);

        const id = document.createElement("h3");
        id.textContent = books[i].id;
        id.classList.add("text-view-book");
        document.getElementById("div-view-book").appendChild(id);

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        btnDelete.classList.add("btn-view-book");

        btnDelete.addEventListener("click", () => {
            deleteBook(books[i].id);
            viewBook();
        });

        document.getElementById("div-view-book").appendChild(btnDelete);

    }

}

function cleanViewBook(){

    document.getElementById("div-view-book").replaceChildren();

}

function deleteBook(id) {

    for (let i = 0; i < books.length; i++) {

        if (books[i].id === id) {

            books.splice(i, 1); 
            viewBook();           
            return;          

        }

    }

}