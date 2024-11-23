// Առաջադրանք 1։
// Ստեղծեք ֆունկցիա, որը ստուգում է մուտքագրված թվերի
// արժեքը: Եթե մուտքագրված թիվը փոքր է 0 կամ ոչ թիվ է, ապա
// պետք է catch բլոկում մշակվի սխալը և տպվի
// հաղորդագրություն Invalid input:

console.log(`Առաջադրանք 1`);

let numberx1
try {
  numberx1 = Number( prompt("Մուտքագրել թիվ։ "))
  if (numberx1 > 0) {
    console.log("Մուտքագրվածը դրական թիվ է։ " + numberx1);
  } else {
    throw new Error("Մուտքագրվածը թիվ չէ")
  }
} catch (error) {
    console.log("Invalid input");
} finally {
    console.log("Առաջադրանք 1-ի: Ծրագրի ավարտ");
}

// Առաջադրանք 2։
// Prompt-ով կամ որևէ փոփոխականին փոխանցել որևէ թիվ։ Եթե
// փոփոխականը թիվ չէ ապա անմիջապես catch բկոլում մշակել
// սխալը և տպել հաղորդագրություն, իսկ եթե թիվ է, ապա
// այդքան վարկյան հետո տպել հաղորդագրություն Time's up!:

console.log(`
Առաջադրանք 2`);

let numberx2
try {
  numberx2 = Number( prompt("Մուտքագրել թիվ։ "))

  //if (typeof Number(numberx2) === 'number' && !isNaN(numberx2)) {
  if (numberx2 > 0) {
    console.log("Մուտքագրվածը թիվ է։ " + numberx2);

    setTimeout(() => {
      console.log("Առաջադրանք 2-ի: Time's up!");
    }, numberx2 * 1000);
    

  } else {
    throw new Error("Մուտքագրվածը թիվ չէ")
  }
} catch (error) {
  console.log("Մուտքագրվածը թիվ չէ։ " + numberx2);
} finally {
    console.log("Առաջադրանք 2-ի: Ծրագրի ավարտ ?");
}

// Առաջադրանք 3։
// Գրել ծրագիր, որը 1 վայրկյանի ինտերվալով տպում է ընթացիկ
// ժամանակը: Եթե անցնում է 10 վայրկյան, ժամացույցը
// դադարում է աշխատել

console.log(`
Առաջադրանք 3`);

let seconds = 0;

const varkyanachap = setInterval(() => {
  const currentTime = new Date();
    console.log(currentTime.toLocaleTimeString());
    seconds++

    if (seconds === 10) {
        clearInterval(varkyanachap)
        console.log("Ժամացույցը դադարեցված է։");
        console.log("Առաջադրանք 3-ի: Ծրագրի ավարտ");
    }
}, 1000)
