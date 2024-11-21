class Person {
  constructor(name, surname, age=15) {
      this.name = name
      this.surname = surname
      this.age = age
  }

  print() {
      return this.name + " " + this.surname + " " + this.age;
  }
}

let p1 = new Person("Anna", "Simonyan", 19)

console.log(15, p1.print());


class Student extends Person {
  constructor(name, surname, age, univer, degree) {
      super(name, surname, age)
      this.univer = univer
      this.degree = degree
  }

  print() {
      return super.print() + " " + this.univer + " " + this.degree
  }

  tsnndyanTaretiv() {
      return 2024 - this.age
  }
}

let s1 = new Student("Anna", "Simonyan", 19, "NUASA", "Bakalavr")

console.log(28, s1.print());
console.log(28, s1.tsnndyanTaretiv());

class UsXorhurd extends Student {
  constructor(name, surname, age, univer, degree, krtThoshak) {
      super(name, surname, age, univer, degree)
      this.krtThoshak = krtThoshak
  }

  showToshak() {
      return this.krtThoshak
  }
}

let u1 = new UsXorhurd("Anna", "Simonyan", 19, "NUASA", "Bakalavr", 5000)
console.log(51, u1.showToshak());


console.log("------------------------------------------------");
console.log(typeof p1);
console.log(typeof s1);
console.log(typeof u1);
console.log("------------------------------------------------");
console.log(p1 instanceof Person);
console.log(p1 instanceof Student);
console.log(p1 instanceof UsXorhurd);
console.log("------------------------------------------------");
console.log(s1 instanceof Person);
console.log(s1 instanceof Student);
console.log(s1 instanceof UsXorhurd);
console.log("------------------------------------------------");
console.log(u1 instanceof Person);
console.log(u1 instanceof Student);
console.log(u1 instanceof UsXorhurd);
console.log("------------------------------------------------");
console.log(71, u1.print());
console.log("------------------------------------------------");
console.log(p1.constructor);
console.log(s1.constructor);
console.log(u1.constructor);
console.log("------------------------------------------------");
console.log(p1.constructor.name);
console.log(s1.constructor.name);
console.log(u1.constructor.name);
console.log("------------------------------------------------");
console.log([]);
console.log("------------------------------------------------");
let arr1 = [0, 1, 2, 3, 14, 5, 6, 7, 8, 9]
console.log(84, Math.max(...arr1));
console.log("------------------------------------------------");
Array.prototype.maximum = function() {
  let max = this.at(0)
  for(i of this)
      if (i > max)
          max = i
  return max
}

// սխալ եղանակ
// Array.prototype.minimum = () => {
//     console.log(90, this);
// }

console.log(99, arr1.maximum());

// Ստատիկ
class Miban {
  static count = 0
  add() {
      Miban.count += 1
  }
  static tpel() {
      return Miban.count
  }
}

let m1 = new Miban()
let m2 = new Miban()
let m3 = new Miban()
let m4 = new Miban()

m1.add()
m1.add()
m1.add()

console.log(Miban.tpel());
