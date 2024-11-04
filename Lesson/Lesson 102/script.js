

for (let index = 0; index < 5; index++) {
  if (index == 4) {
    continue
  } else {
  console.log(index);
  }
}



let count = 0;
while (true) {
  console.log(count);

  count++

  if (count > 10)
    break
}

function parzTiv(z) {
  if (z <= 1)  return false
    for (let i = 2; i < z; i++)
      if (z % i === 0) return false
  return true
}

let countPT = 0;
while (true) {
  console.log(countPT);

  console.log(parzTiv(countPT));
  countPT++

  if (countPT > 20)
    break
}



//--------------------------------------------------------------------------

let number ;

do {
  number = Number(prompt("Enter number from 1 to 5"))
} while (number < 1 || number > 5)
  console.log(number);


//--------------------------------------------------------------------------

  function sumWhen(n) {
    let sum = 0;
    let i = 1;
    while(i <= n) {
      sum += i++
      if(sum >50) return
      let o = 5
    }
    return sum
  }

console.log(sumWhen(5));

//--------------------------------------------------------------------------

for (let i = 0; i < 8; i++ ) {
  for (let j = 0; j < 8; j++) {
    console.log(i, j)
    if ( (i+ j) % 2 === 0 ) {
      console.log("white")
    } else {
      console.log("black")
    }   
  }
  console.log("new line")
}



//--------------------------------------------------------------------------

function factorial (n) {
  if ( n === 0 ) return 1 
  let result = 1;
  while ( n > 0 ) {
    result *= n
    n--
  }
  return result
}

//console.log(factorial(1))

function factorial (n) {
  if ( n === 0 ) return 1
  return n * factorial(n - 1)
}

//console.log(factorial(1))


let count_F1 = 0;
while (true) {

  console.log(count_F1);
  console.log(factorial(count_F1));
  count_F1++

  if (count_F1 > 9)
    break
}


//---------------------------------------------------------------------------

function fibonacci (n) {
  if (n <= 1) return n
  return fibonacci(n -1 ) + fibonacci(n - 2)
}

let count_F2 = 0;
while (true) {

  console.log(count_F2);
  console.log(fibonacci(count_F2));
  count_F2++

  if (count_F2 > 9)
    break
}

//----------------------------------------------------------------------------


function reverseNumber(n, result = 0){
  console.log(n, result)
  if (n === 0) return result
  return reverseNumber(Math.floor(n / 10), result * 10 +(n % 10))
}

console.log(reverseNumber(5464))

