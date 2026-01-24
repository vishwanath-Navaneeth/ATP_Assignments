
class Book{
    title;
    author;
    pages;
    isavailable;
    
    constructor(title, author, pages, isavailable){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isavailable = isavailable;
    }
    
    borrow(){
        this.isavailable=false;
    }
    returnBook(){
        this.isavailable=true;
    }
    GetInfo(){
        console.log(this.title,this.author,this.pages);
    }
    islongbook(){
        return this.pages>300;
    }
}

let b1=new Book('the','dev',300,true);
b1.GetInfo();