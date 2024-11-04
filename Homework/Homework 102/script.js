

//Առաջադրանք 1։ Ունենք 2 prompt ։ Որոնցում մուտքագրվում են թվեր ։ Ցուցադրել, թե այդ թվերի արանքում քանի զույգ թիվ կա և թե որոնք են դրանք
//Օրինակ․՝ 2,9 թվերի դեպքում կստանանք հետևյալ արդյունքը ՝ “Առկա է 4 զույգ թիվ (2,4,6,8)”

let a1, b1;
a1 = Number(prompt("Mutqgreq tiv"));
b1 = Number(prompt("Mutqgreq tiv"));

for (i = a1; i <= b1; i++ ) {
  if(i % 2 == 0) console.log(i);
}

//Առաջադրանք 2։ Ունենք prompt։ Ցուցադրել մուտքագրված թվի ֆակտորիալը
//Օրինակ․՝ 6 - ի դեպքում կստանանք 720 => 6! = 1*2*3*4*5 = 720
//Թվի ֆակտորիալը 1-ից մինչև այդ թիվը բոլոր թվերի արտադրյալն է


function factorial(n) {
  if ( n === 0 ) return 1 
  let result = 1;
  while ( n > 0 ) {
    result *= n
    n--
  }
  return result
}

console.log(factorial(Number(prompt("mutqagrel tiv"))));


//Առաջադրանք 3։ Ունենք prompt ։ Երբ կմուտքագրվի թիվ ցուցադրել՝ արդյոք այդ թիվը 3 - ի աստիճան է թե ոչ ։
//Օրինակ․՝ 9 - ի դեպքում կստանանք այո քանզի 3^3 = 9 սակայն 6 -ի դեպքում ոչ

let n3 = Number(prompt(" mutqagrel tiv "))
function function_3_astichan(n3) {
  if ( n3 < 3 ) return 0 
  while ( n3 >= 3 ) {
    n3 /= 3
    
  }
  return ( n3 % 3 )
}

if (function_3_astichan(n3) ===1) console.log("ayo ays tiv@ 3-i astichan e")
  else console.log("voch ays tiv@ 3-i astichan che")

//Առաջադրանք 4։ Տպել առաջին երկնիշ թիվը, որը 17 -ով բազմապատկելիս ստացվում է 300 -ից մեծ թիվ

let x4 = 300; 
while(true) {
  if((x % 17) === 0) break
  else x++
  }
  console.log(x/17);


//Առաջադրանք 5։ Տպել 8 -րդ երկնիշ թիվը, որը 17 -ով բազմապատկելիս ստացվում է 300-ից մեծ թիվ


let x5 = 300; 
for (i = 0; i < 8; i++){
    while(true) {
      if((x % 17) === 0) break
      else x++
    }
  if(i === 7) break
  x++
}
console.log(x/17);  


//Առաջադրանք 6։ a,b,c (ոչ իրար հավասար)  թվերը կոչվում են Պյութագորասյան եռյակ, եթե c2=a2+b2
//Օրինակ՝ 3,4,5 -ի դեպքում 25 = 16 + 9
//Ներկառուցված ցիկլերի օգնությամբ տպել մինչև 99 բոլոր Պյութագորասյան եռյակները

let a6 = 1, b6 = 1, c6 = 1;

for(a6 = 1; a6 < 99; a6++) {
  for(b6 = 1; b6 < 99; b6++) {
    for(c6 = 1; c6 < 99; c6++) {
      if(((c6**2) === ((a6**2) + (b6**2))) && (a6 < b6)) 
        console.log(a6, b6, c6);
    }
  }
}

