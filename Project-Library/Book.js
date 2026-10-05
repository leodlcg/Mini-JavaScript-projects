export function Book (author, category, numberPages, read, id){


    this.author = author;
    this.category = category;
    this.numberPages = numberPages;
    this.read = read;
    this.id = crypto.randomUUID();


}


