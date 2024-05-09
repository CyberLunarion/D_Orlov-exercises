function myFunction() {
    console.log("This book is called '",book.name,"' and was written by",book.author);
    console.log("It has",book.pages,"pages in it.");
}

const book = {
    name: "Great Adventures of John Doe",
    author: "Jane Doe",
    pages: 123
}

myFunction();