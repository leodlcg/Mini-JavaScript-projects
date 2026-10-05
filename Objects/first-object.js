function Book(title, author, pages, read){

    //if para proteger o construtor para não ser chamado sem new.
    if(!new.target){
        throw Error("Voce deve usar 'new' operator para chamar o constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookRead = function() {
        return this.read;
    }

}


const book = new Book("A revolução dos bichos", "Jorge Orwell", 249, false);

//Forma incorreta de chamar o construtor:
//const book2 = Book("Teste", "Teste", "234", false);

//Forma correta de instanciar um objeto:
const book2 = new Book("Teste", "Teste", "234", false);

console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.read);


book.read = true;

console.log(book.read);

console.log(book.bookRead());


//Prototiopos:
//book2 guarda os dados próprios daquela instância: title, author, pages, read.
//Book.prototype guarda o que é compartilhado por todas as instâncias: por exemplo, o método bookRead.
//(funciona parecido com o Java, onde Book seria a classe que no JS vira Prototipo e os objetos herdam de um protótipo.)
//Um protótipo(~classe) é também um objeto que ocupa espaço na memoria, os objetos instanciados herdaram dele os metodos e etc...
//book2  ──herda de──▶  Book.prototype  ──herda de──▶  Object.prototype  ──▶  null
//Object.prototype seria mais ou menos como a classe Object do Java.



console.log("Verificando se o protótipo de book é Book.prototype:");
console.log(Object.getPrototypeOf(book) === Book.prototype);
//ou
book instanceof Book;  
console.log(Object.getPrototypeOf(book2) === Book.prototype);
//ou
book2 instanceof Book;  

console.log("Verificando se o objeto book(filho) é igual ao objeto prototipo Book(pai)");
console.log( book2 === Book.prototype);
//ou
book2 instanceof Book;  

////book2  ──herda de──▶  Book.prototype  ──herda de──▶  Object.prototype  ──▶  null

// Player.prototype.__proto__ (__proto__  é obsoleto, não é mais usado)
console.log("Verificando se o prototipo Book é uma objeto prototipo:");
console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);


console.log(book2.valueOf()); //.valueOf é um metodo definido dentro de Object.prototype (Como se fosse a classe object do java).
//Prova:
console.log(book2.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
//O JavaScript descobre quais propriedades existem (ou não) no objeto e começa a percorrer a cadeia para encontrar a propriedade ou função.
//Object.prototype é o ultimo objeto da cadeia, se tentarmos ver quem é o prototipo dele será null.
//Cada objeto protótipo herdaObject.prototype por padrão, seja direta ou indiretamente.

//POR QUE PROTOTIPOS SÃO TÃO IMPORTANTES?

//Podemos definir propriedades e funções comuns entre todos os objetos em um protótipo para economizar memória. 
//Definir cada propriedade e função ocupa muita memória, especialmente se você tiver muitas propriedades e funções comuns e muitos objetos criados! 
//Defini-los em um objeto centralizado e compartilhado ao qual os objetos têm acesso economiza assim memória.
//o segundo motivo é permitir que vários objetos compartilhem e reutilizem comportamento por meio do mecanismo de herança prototípica do JavaScript, 
//como permitirplayer1 eplayer2 acessar funções.sayHello definidas em Player.prototype .

