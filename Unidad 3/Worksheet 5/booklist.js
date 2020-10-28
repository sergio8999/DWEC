class boobklist{
    constructor(){
        this.arrayBooks = [];
        this.currentBookIndex = 0;
        this.lastbook = null;
    }

    // Propiedades
    get readBooks(){
        return this.arrayBooks.filter((book) => book.read).length;
    }
    get notReadBooks(){
        return this.arrayBooks.filter((book) => !book.read).length;
    }
    get nextBook(){
        if(this.currentBookIndex <= this.arrayBooks.length)
            return this.arrayBooks[this.currentBookIndex+1];
        return null;
    }
    get currentBook(){
        if(this.arrayBooks.length != 0)
            return this.arrayBooks[this.currentBookIndex];
        return null;
    }
    
    // Métodos

    add(book) {
        return this.arrayBooks.push(book);
    }

    finishCurrent(){
        if(this.currentBookIndex < this.arrayBooks.length){
            this.arrayBooks[this.currentBookIndex].read = true;
            this.arrayBooks[this.currentBookIndex].readDate = new Date(Date.now());
            this.lastbook = this.arrayBooks[this.currentBookIndex];
            this.currentBookIndex++;
        }else
            console.log("No esta leyendo ningún libro");
    }
}

class book{
    constructor(title,genre,author,){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.readDate = "";
    }
}
