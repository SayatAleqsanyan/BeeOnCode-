// Առաջադրանք 1: Credit կլասը տվյալներ է պարունակում բանկային վարկի մասին
// նրա դաշտերն են վարկառուի անուն և գաղտնի դաշտերը՝ գումար, տոկոսադրույք,
// տևողություն (ամիսներով)
// print մեթոդը տպում է վարկառուի անունը, գումարը, տոկոսադրույքը, և վերջնական
// գումարը, որը պետք է վճարվի
// money մեթոդը թույլ է տալիս փոփոխել վարկառույի գումարը, սակայն
// փոփոխության ժամանակ գումարից նախապես պետք է 5% միջնորդավճար պահել
// duration մեթոդը սահմանում է վարկի տևողությունը, սակայն տևողությունը չի
// կարող լինել 5 տարուց ավելի
// interestRate մեթոդը սահմանում է վարկի տոկոսադրույքը, սակայն այն պետք է
// լինի գումարի 5 - 23% հատվածում չափով
// Ստեղծել օբյեկտ, սահմանել վարկի տևողությունը և կանչել Print մեթոդը

class Credit {
  constructor(clientName, amount = 0, interestRate = 5, duration = 1) {
    this.clientName = clientName;  
    this._amount = amount;         
    this._interestRate = interestRate; 
    this._duration = duration;      
  }

  print() {
    const totalAmount = this._amount * (1 + (this._interestRate / 100) * (this._duration / 12));
    console.log(`Client Name: ${this.clientName}`);
    console.log(`Loan Amount: ${this._amount}`);
    console.log(`Interest Rate: ${this._interestRate}%`);
    console.log(`Duration: ${this._duration} months`);
    console.log(`Total to Pay: ${totalAmount.toFixed(2)}`);
  }

  money(amount) {
    const fee = amount * 0.05; 
    this._amount = amount - fee;  
  }

  duration(duration) {
    if (duration > 60) {
      console.log("The loan duration cannot exceed 60 months.");
    } else {
      this._duration = duration;
    }
  }

  interestRate(rate) {
    if (rate < 5 || rate > 23) {
      console.log("The interest rate must be between 5% and 23%.");
    } else {
      this._interestRate = rate;
    }
  }
}

let credit1 = new Credit("John Doe", 10000, 10, 24);
credit1.money(12000);
credit1.duration(48);
credit1.interestRate(15);

credit1.print();


// Առաջադրանք 2:
// Developer կլասն ունի դաշտեր՝
// name - անուն
// surname - ազգանուն
// skills - ծրագրավորման լեզուների զանգված՝ ["HTML", "CSS", "JS"]
// salary - աշխատավարձ
// Tpel - մեթոդը էկրանին տպում է ծրագրավորողի անուն ազգանունը, այնուհետև ul
// li տեգերի միջոցով նրա իմացած ծրագրավորման լեզուները
// Կլասից ժառանգվում են FrontEnd և Backend կլասները
// Backend կլասն ունի առանձին դաշտ, որը կոչվում է Direction վերջինս ցույց է
// տալիս,
// թե ծրագրավորողն ի՞նչ ուղղության է պատկանում, օրինակ՝ C#, PHP, Node կամ
// մեկ այլ:
// Frontend կլասը չունի որևէ առանձին դաշտ

// Օրինակներ՝
// let p = new FrontEnd("Aram", "Hakobyan", ["Angular", "JS"], 50000);
// let p1 = new Backend("Aram", "Ghazaryan", ["Angular", "Laravel", "Node"], 600000,
// "PHP");
// Ստեղծել 10 տարր պարունակող զանգված
// էկրանին տպել ամենաբարձր աշխատավարձ ստացող ծրագրավորողի տվյալը
// (առանց sort, filter անելու)
// գտնել ամենաբարձր աշխատավարձ ունեցող frontend ծրագրավորողին
// օգտագործելով sort/filter ֆունկցիաները
// filter/reduce -ի կիրառմամբ հաշվել frontEnd ծրագրավորողների աշխատավարձների
// գումարը

class Developer {
  constructor(name, surname, skills = [], salary = 0) {
    this.name = name;
    this.surname = surname;
    this.skills = skills;
    this.salary = salary;
  }

  tpel() {
    let skillsList = this.skills.map(skill => `<li>${skill}</li>`).join('');
    let developerInfo = `
      <p>Name: ${this.name} ${this.surname}</p>
      <ul>${skillsList}</ul>
    `;
    return developerInfo; 
  }
}

class FrontEnd extends Developer {
  constructor(name, surname, skills, salary) {
    super(name, surname, skills, salary);
  }
}

class Backend extends Developer {
  constructor(name, surname, skills, salary, direction) {
    super(name, surname, skills, salary);
    this.direction = direction;
  }

  tpel() {
    let skillsList = this.skills.map(skill => `<li>${skill}</li>`).join('');
    let developerInfo = `
      <p>Name: ${this.name} ${this.surname}</p>
      <p>Direction: ${this.direction}</p>
      <ul>${skillsList}</ul>
    `;
    return developerInfo; 
  }
}

let developers = [
  new FrontEnd("Aram", "Hakobyan", ["Angular", "JS"], 50000),
  new Backend("Aram", "Ghazaryan", ["Angular", "Laravel", "Node"], 600000, "PHP"),
  new FrontEnd("Mari", "Petrosyan", ["React", "CSS"], 45000),
  new Backend("David", "Hakobyan", ["Java", "Spring"], 70000, "Java"),
  new FrontEnd("Sona", "Tovmasyan", ["Vue", "HTML", "CSS"], 40000),
  new Backend("Vahan", "Avetisyan", ["Node", "Express"], 80000, "Node"),
  new FrontEnd("Anahit", "Hovhannisyan", ["Angular", "TypeScript"], 52000),
  new Backend("Tigran", "Sargsyan", ["Python", "Django"], 85000, "Python"),
  new FrontEnd("Naira", "Harutyunyan", ["HTML", "JS", "CSS"], 46000),
  new Backend("Arsen", "Grigoryan", ["C#", "ASP.NET"], 120000, "C#")
];

let highestSalaryDeveloper = developers.reduce((max, developer) => {
  return developer.salary > max.salary ? developer : max;
}, developers[0]);

document.body.innerHTML += `<h3>Ամենա բարձր աշխատավարձ ստացող ծրագրավորողը:</h3>`;
document.body.innerHTML += highestSalaryDeveloper.tpel();

let highestSalaryFrontEnd = developers
  .filter(dev => dev instanceof FrontEnd)
  .reduce((max, developer) => {
    return developer.salary > max.salary ? developer : max;
  }, developers[0]);

document.body.innerHTML += `<h3>Ամենա բարձր աշխատավարձ ունեցող FrontEnd ծրագրավորողը:</h3>`;
document.body.innerHTML += highestSalaryFrontEnd.tpel();

let totalSalaryFrontEnd = developers
  .filter(dev => dev instanceof FrontEnd)
  .reduce((sum, developer) => sum + developer.salary, 0);

document.body.innerHTML += `<h3>FrontEnd ծրագրավորողների ընդհանուր աշխատավարձը կազմում է: ${totalSalaryFrontEnd}</h3>`;