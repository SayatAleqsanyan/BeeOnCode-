
// Առաջադրանք 1:
// Ունենք օբյեկտների զանգված, որտեղ նկարագրվում են ուսանողի տվյալներ name,
// surname, university, raiting(իրենից ներկայացնում է գնահատականների
// զանգված․ օր․՝ [10, 5, 2, 6, 5]), language(իրենից ներկայացնում է զանգված թե ինչ
// լեզուների է տիրապետում տվյալ ուսանողը.
// օր․՝ ['JavaScript', 'C#', 'PHP', 'Python']) դաշտերը:


let students = [
  { name: 'Ani', surname: 'Sargsyan', 'university': 'NPUA', raiting:
  [5, 5, 6, 9, 10], 'language': ["Angular", "Laravel", "Node"] },
  { name: 'Anna', surname: 'Hakobyan', 'university': 'NPUA',
  raiting: [6, 8, 7, 9, 7], 'language': ["Angular", "C#", "Node"] },
  { name: 'Mark', surname: 'Winston', 'university': 'Acadia',
  raiting: [6, 8, 5, 4, 9], 'language': ["Laravel", "Node"] },
  { name: 'John', surname: 'Smit', 'university': 'Laval', raiting:
  [2, 4, 5, 4, 4], 'language': ["HTML", "CPP"] },
  { name: 'Sharsharet', surname: 'Hernehdash', 'university': 'UOT',
  raiting: [6, 6, 6, 7, 8], 'language': ["HTML"] },
  { name: 'Karl', surname: 'Marks', 'university': 'UOT', raiting:
  [2, 7, 7, 8, 6], 'language': ["Bootstrap", "Node"] },
  { name: 'Nerk', surname: 'Abdulamish', 'university': 'Peking',
  raiting: [8, 8, 7, 7, 8], 'language': ["JS", "Laravel", "Node"] },
  { name: 'Zig', surname: 'Squerds', 'university': 'Peking',
  raiting: [4, 5, 4, 4, 6], 'language': ["Angular", "C#", "Node"] },
  { name: 'Kargel', surname: 'Pertishep', 'university': 'NPUA',
  raiting: [5, 5, 6, 5, 4], 'language': ["Angular", "BASIC", "VBA"] },
  { name: 'Meygard', surname: 'Humbergs', 'university': 'NUASA',
  raiting: [2, 2, 3, 4, 3], 'language': ["CPP", "C#", "Node"] },
  ]

// - Ցուցադրել բոլոր ուսանողների անուն, ազգանունը և միջին բալը։

console.log(`Առաջադրանք 1
  Ուսանողների անուն, ազգանուն և միջին բալը`);

students.forEach(student => { 
  console.log("Անուն։ " + student.name, " Ազգանուն։ " + student.surname, 
  " Միջին բալը։ " + student.raiting.reduce((a, b) => a + b , 0 ) / student.raiting.length);
});

// - Ցուցադրել այն ուսանողների անուն, ազգանունը և համալսարանը, որոնք
// տրապետում են C# ծրագրավորման լեզվին (օգտագործել includes()
// ֆունկցիան)։
console.log(`--------------------------------------------------------------------------
  Ուսանողները որոնք տրապետում են C# ծրագրավորման լեզվին `);

students.forEach(students => { 
  if (students.language.includes("C#")) { 
    console.log("Անուն։ " + students.name, 
      " Ազգանուն։ " + students.surname, 
      " Համալսարանը։ " + students.university);
}});

// - տպել այն ուսանողների տվյալները, որոնք ունեն գոնե մեկ 2
console.log(`--------------------------------------------------------------------------
  Ուսանողները որոնք ունեն գոնե մեկ 2`);

students.forEach(students => { 
  if (students.raiting.includes(2)) { 
    console.log("Անուն։ " + students.name, 
      " Ազգանուն։ " + students.surname, 
      " Համալսարանը։ " + students.university);
}});

// Առաջադրանք 2:
// Ունենք օբյեկտների զանգված, որտեղ նկարագրվում են ուսանողի տվյալներ՝
// անուն, ազգանուն, դասամատյանի համար։ Տպել 11-20 դասամատյանի համար
// ունեցող այն ուսանողների ցուցակը, որոնց անունը և ազգանունը սկսվում են ՛A՛ տառով
console.log(`--------------------------------------------------------------------------
Առաջադրանք 2
  11-20 դասամատյանի համար ունեցող այն ուսանողների ցուցակը, 
  որոնց անունը և ազգանունը սկսվում են ՛A՛ տառով`);

  let students2 = [
    { name: 'Ani', surname: 'Sargsyan', university: 'NPUA', raiting: [5, 5, 6, 9, 10], language: ["Angular", "Laravel", "Node"] },
    { name: 'Anna', surname: 'Hakobyan', university: 'NPUA', raiting: [6, 8, 7, 9, 7], language: ["Angular", "C#", "Node"] },
    { name: 'Mark', surname: 'Winston', university: 'Acadia', raiting: [6, 8, 5, 4, 9], language: ["Laravel", "Node"] },
    { name: 'John', surname: 'Smit', university: 'Laval', raiting: [2, 4, 5, 4, 4], language: ["HTML", "CPP"] },
    { name: 'Sharsharet', surname: 'Hernehdash', university: 'UOT', raiting: [6, 6, 6, 7, 8], language: ["HTML"] },
    { name: 'Karl', surname: 'Marks', university: 'UOT', raiting: [2, 7, 7, 8, 6], language: ["Bootstrap", "Node"] },
    { name: 'Nerk', surname: 'Abdulamish', university: 'Peking', raiting: [8, 8, 7, 7, 8], language: ["JS", "Laravel", "Node"] },
    { name: 'Zig', surname: 'Squerds', university: 'Peking', raiting: [4, 5, 4, 4, 6], language: ["Angular", "C#", "Node"] },
    { name: 'Kargel', surname: 'Pertishep', university: 'NPUA', raiting: [5, 5, 6, 5, 4], language: ["Angular", "BASIC", "VBA"] },
    { name: 'Meygard', surname: 'Humbergs', university: 'NUASA', raiting: [2, 2, 3, 4, 3], language: ["CPP", "C#", "Node"] },
    // Նոր ուսանողներ
    { name: 'Ara', surname: 'Abramyan', university: 'Harvard', raiting: [9, 9, 8, 10, 10], language: ["Java", "Python", "Node"] },
    { name: 'Anna', surname: 'Arakelyan', university: 'MIT', raiting: [7, 8, 8, 7, 6], language: ["React", "JS", "Django"] },
    { name: 'Aram', surname: 'Tigranyan', university: 'Stanford', raiting: [6, 6, 7, 8, 9], language: ["C++", "JavaScript", "Python"] },
    { name: 'Ava', surname: 'Petrosyan', university: 'Oxford', raiting: [10, 10, 9, 10, 10], language: ["Ruby", "Node", "Java"] },
    { name: 'Anahit', surname: 'Mkrtchyan', university: 'Cambridge', raiting: [5, 5, 6, 7, 8], language: ["PHP", "SQL", "Laravel"] },
    { name: 'Ariana', surname: 'Khachatryan', university: 'UCLA', raiting: [8, 8, 7, 7, 6], language: ["Swift", "Java", "Kotlin"] },
    { name: 'Artur', surname: 'Hovhannisyan', university: 'Princeton', raiting: [9, 9, 9, 10, 10], language: ["JavaScript", "Go", "SQL"] },
    { name: 'Alina', surname: 'Avetisyan', university: 'Yale', raiting: [7, 8, 8, 7, 7], language: ["C#", "React", "HTML"] },
    { name: 'Arsen', surname: 'Hakhverdyan', university: 'Columbia', raiting: [6, 6, 7, 8, 9], language: ["Angular", "Java", "MySQL"] },
    { name: 'Anoush', surname: 'Tadevosyan', university: 'UOT', raiting: [8, 9, 8, 8, 7], language: ["Python", "Django", "HTML"] }, 
  ];

students2.forEach((student, index) => student.studentNumber = index + 1);

students2.forEach(student => { 
  if (student.studentNumber >= 10 && student.studentNumber <= 20 && 
    student.name.toLowerCase().startsWith('a') && student.surname.toLowerCase().startsWith('a')
  ) { 
    console.log("Անուն։ " + student.name, 
      " Ազգանուն։ " + student.surname,
      " Համար։ " + (student.studentNumber));
}});


// let students2 = students.map(val => {
//   return { ...val, raiting: [...val.raiting], language: [...val.language] }
// });

// let students2 = students.map(val => {
//   return { ...val, raiting: val.raiting.map(rat => {return {...rat}}), language: [...val.language] }
// });


// let students2 = [...students, ...students];

// students2.forEach((student, index) => student.studentNumber = index + 1);

// students2.forEach(student => { 
//   if (student.studentNumber >= 10 &&  student.studentNumber <= 20) { 
//     console.log("Անուն։ " + student.name, 
//       " Ազգանուն։ " + student.surname,
//       " Համար։ " + (student.studentNumber));
// }});

// console.log(students);

