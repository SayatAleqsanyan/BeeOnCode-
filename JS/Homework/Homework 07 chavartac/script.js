// Առաջադրանք 1: Ունենք Project կլասը, որը բնութագրում է
// պրոյեկտին: Կլասի դաշտերն են.
// name - պրոյեկտի անվանումը
// languages - օգտագրոծված ծրագրավորման լեզուների
// զանգվածը:
// Օրինակ՝ let p1 = new Project("Marketing Site", ["JS",
// "Angular","CSS"]);

class Project {
  constructor(name, languages = []) {  
    this.name = name;
    this.languages = languages;  
  }

  addLanguage(languages) {
    this.languages.push(languages);  
  }
}

let p1 = new Project("Marketing Site", ["JS", "Angular", "CSS"]);  
p1.addLanguage("HTML");
console.log(p1);

// Ունենք նաև Developer կլասը, որը ինֆորմացիա է պարունակում
// ծրագրավորողի մասին: Կլասի դաշտերն են.
// name - Անուն
// surname - ազգանուն
// photo - նկարը
// projects - զանգված (this.projects =[]), որի մեջ կպահպանվեն նրա
// կատարած պրոյեկտները (օբյեկտն է Project կլասից)

class Projects {
  constructor(name, description = []) {  
    this.name = name;
    this.description = description;  
  }

  toString() {
    return ("Project Name: " + this.name + ", Description: " + this.description)
  }
}

class Developer {
  constructor(name, surname, photo) {  
    this.name = name;
    this.surname = surname;
    this.photo = photo;
    this.projects = [];  
  }

  addProjects(projects) {
    this.projects.push(projects);  
  }

  toString() {
    let projectDetails = this.projects.map(project => project.toString()).join("<br>");
    return `Developer: ${this.name} ${this.surname} <br> Photo: <img src="${this.photo}" alt="Developer Photo" width="100"> <br> Projects: <br> ${projectDetails}`;
  }

}

let dev1 = new Developer("John", "Doe", "https://example.com/john-photo.jpg");

let project1 = new Projects("Website Redesign", "Redesigning the company website.");
let project2 = new Projects("App Development", "Developing a mobile application.");

dev1.addProjects(project1);
dev1.addProjects(project2);

document.write(dev1.toString());
console.log(dev1.toString());


// Developer կլասի մեթոդներն են
// addProject(x) - projects զանգվածին ավելացնում է x project -ի
// տվյալը
// toString - էկրանին տպում է տվյալ ծրագրավորողի տվյալը և նրա
// կատարած պրոյեկտների տվյալները

// Էկրանին տպելու համար կարող եք օգտագործել document.write
// կամ տպեք ինֆորմացիան կոնսոլում