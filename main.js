"use strict";

const fruits = [{
        name: "apple",
        count: 10
    },
    {
        name: "banana",
        count: 5
    },
    {
        name: "blackberry",
        count: 55
    },
    {
        name: "cherry",
        count: 73
    },
    {
        name: "grapefruit",
        count: 3
    },
    {
        name: "kiwi",
        count: 15
    },
    {
        name: "orange",
        count: 6
    }
];

function fruitMap(arr, key) {
    return arr.map(function(fruit) {
        return fruit[key];
    });
}

console.log(fruitMap(fruits, "name"));



const people = [{
    name: "Peter",
    books: ["Frankenstein", "Notes from The Underground"]
}, {
    name: "Lisa",
    books: ["Don Quixote of La Mancha", "Hamlet"]
}, {
    name: "Michael",
    books: ["Frankenstein", "The Art of Computer Programming"]
}, {
    name: "Greta",
    books: ["The Communist Manifesto", "50 Shades of Grey"]
}, {
    name: "Lora",
    books: ["Don Quixote of La Mancha", "The Divine Comedy"]
}, {
    name: "Dave",
    books: ["The Remains of The Day", "Hamlet"]
}];


function bookReduce(arr) {
    let bookList = arr.reduce(function(list, person) {
        list.push(person.books[0]);
        list.push(person.books[1]);
        return list;
    }, []);

    let bookListShort = [];

    bookList.forEach(function(book) {
        if (bookListShort.indexOf(book) === -1) {
            bookListShort.push(book);
        }
    });

    return bookListShort;
    // или более лаконично: return [...new Set(bookList)]; но этого не проходили, увидено на stackoverflow
    // также можно было проверять наличие копии книги в bookListShort на этапе arr.reduce, но получалось как-то заумно, решил разбить
}

console.log(bookReduce(people));