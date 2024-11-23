// try {
//     // կոդ, որը կարող է առաջացնել ինչ որ սխալ
//     // throw new Error("bla bla bla")

//     // const error = new Error("dsgdsgdsg")
//     // console.log(6, error.name);

//     const a = 10

//     a = 555
    
//     console.log(result);
// } catch (error) {
//     // Աշխատելու է եթե հայտնաբերվել է որևէ սխալ
//     console.log(error.stack);
// } finally {
//     console.log("Ծրագրի ավարտ");
// }

// function bajanel(a, b) {
//     if (b === 0) {
//         throw new Error("Զրոի վրա չենք կարող բաժանել")
//     }
//     return a / b
// }

// bajanel(1, 0)


// setTimeout
// let a = 5

// function callback (b) {
//     console.log(a += 1);
// }

// setTimeout(callback, 1000, a)

// // setInterval

// setInterval(callback, 1, a)


// let counter = 0

// const interval = setInterval(() => {
//     counter++
//     console.log("hashivy - ", counter);
//     if (counter === 5) {            // 2500
//         clearInterval(interval)
//     }
// }, 500)

// let timeOuty = setTimeout(() => {
//     // clearTimeout(timeOuty)              // աշխատում է 1500 ից հետո
//     console.log("lalalalal");
//     clearInterval(interval)                 // աշխատում է 1500 ից հետո
// }, 1525)

// clearTimeout(timeOuty)  // աշխատում է ավելի շուտ քան 1500 միլիվարկյանը
// clearInterval(interval)



// setInterval (() => {
//     const now = new Date();

//     console.log(now.toLocaleTimeString());
    
// }, 1000)


// let seconds = 10;

// const varkyanachap = setInterval(() => {
//     console.log(seconds.toString().padStart(2, "0"));
//     seconds--
//     if (seconds < 0) {
//         clearInterval(varkyanachap)
//     }
    
// }, 1000)

// const colors = ['red', 'green', 'blue', 'yellow', 'purple']
// let index = 0

// const flash = setInterval(() => {
//     document.body.style.backgroundColor = colors[index]
//     index++
//     if (index >= colors.length) {
//         index = 0
//     }
//     index = (index + 1) % colors.length
// }, 1000)

// const me = setTimeout(() => {
//     clearInterval(flash)
//     clearTimeout(me)
// }, 10000)

console.log((0) % 6);
console.log((1) % 6);
console.log((2) % 6);
console.log((3) % 6);
console.log((4) % 6);
console.log((5) % 6);
