// Classes, Composition

// const f1 = function () {
//     let a = 555;
//     return {
//         newNumber: a
//     }

// }

// console.log(f1());

// const p1 = {
//     name: "Ani",
//     surname: "Safaryan",
//     age: 25
// }
// const p2 = {
//     name: "Ani",
//     surname: "Safaryan",
//     age: 25
// }

// Կոմպոզիցիայի պարզ տիպ
// class Book {
//     constructor(title, pageCount) {
//         this.title = title;
//         this.pageCount = pageCount;
//     }
// }

// class Student {
//     constructor(name, surname, age, book) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.book = book
//     }
// }

// let b1 = new Book("myTitle", 255)
// let p1 = new Student("Ani", "Safaryan", 25, new Book("myTitle", 255))
// let p2 = new Student("Ani", "Safaryan", 25, new Book("myTitle", 255))
// let p3 = new Student("Ani", "Safaryan", 25, new Book("myTitle", 255))

// console.log(p1);

// Կոմպոզիցիայի բարդ տիպ
// class Book {
//     constructor(title, pageCount) {
//         this.title = title;
//         this.pageCount = pageCount;
//     }
// }

// class Student {
//     constructor(name, surname, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.books = []
//     }

//     addBook(book) {
//         this.books.push(book)
//     }
// }

// let p1 = new Student("Ani", "Safaryan", 25, new Book("myTitle", 255))
// let p2 = new Student("Ani", "Safaryan", 25, new Book("myTitle", 255))
// let p3 = new Student("Ani", "Safaryan", 25, new Book("myTitle", 255))

// p1.addBook(new Book("myTitle", 255));
// p1.addBook(new Book("myTitle", 255));
// console.log(p1);

// Ինկապսուլացիա

class Book {
    constructor(title, pageCount) {
        this.title = title;
        this.pageCount = pageCount;
    }
}

class Student {
    count = 1;
    #phone;

    constructor(name, surname, age, phone) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    addCount() {
        this.count += 1
    }

    addPhone(phone) {
        this.#phone = phone
    }

    showPhone() {
        console.log(this.#phone);
        return this.#phone
    }
}

let p1 = new Student("Ani", "Safaryan", 25)
let p2 = new Student("Ani", "Safaryan", 25)
let p3 = new Student("Ani", "Safaryan", 25)

p1.addBook(new Book("myTitle", 255));
p1.addBook(new Book("myTitle", 255));

p1.addCount()
p1.addPhone("099 999 999")

console.log(p1);
console.log(p2);
console.log(p3);

let myPhone = p1.showPhone()
console.log(myPhone);


