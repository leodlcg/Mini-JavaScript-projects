function Person(name) {
  this.name = name;
}

//Definindo um metodo para Person de maneira que todos os seus objetos instanciados possam usar:
//Os objetos instanciados usaram a função através de herança, Person.prototype é um objeto que terá todos os nossos metodos!
//Assim podemos economizar memoria! Não precisamos que todos os objetos Person tenham os mesmos metodos repetidos!
Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is "${this.marker}"`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

//Configurando a herança:
// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype
//player -> Player.prototype -> Person.prototype -> Object.prototype -> null

//JS MAIS RECENTES ES6+ TEM EXTENDS COMO NO JAVA PARA LIDARMOS COM HERANÇA

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is "X"
player2.getMarker(); // My marker is "O"
