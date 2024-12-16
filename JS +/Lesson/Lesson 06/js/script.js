import { newTag, resetData, setData, tableBody } from "./utils.js";

user_name.value = "Ani";
user_surname.value = "Sargsyan";
user_age.value = "25";
user_email.value = "";

// -------------------------------------------------------------------------------
const success_btn = document.querySelector("#success_btn");
success_btn.addEventListener("click", (event) => {
  event.preventDefault();
  // ara.ara.@assadsad.com
  if (
    user_name.value &&
    user_surname.value &&
    /^\d{1,2}$/g.test(user_age.value) &&
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(user_email.value)
  ) {
    const user_data = setData();
    const data = localStorage.getItem("users");

    if (!data) {
      localStorage.setItem("users", JSON.stringify([user_data]));
    } else {
      const oldData = JSON.parse(data);
      oldData.push(user_data);
      localStorage.setItem("users", JSON.stringify(oldData));
    }

    resetData();
    showTable();
  }
});

const showTable = () => {
  let data = localStorage.getItem("users");

  const existingTable = document.querySelector("table");
  if (existingTable) {
    existingTable.remove();
  }

  if (data) {
    data = JSON.parse(data);
    const table_keys = Object.keys(data[0]);
    table_keys.push("Actions");

    const table = newTag("table");
    const tr = newTag("tr");

    for (const key in table_keys) {
      const th = document.createElement("th");
      th.innerHTML = table_keys[key];
      tr.append(th);
    }
    table.append(tr);

    // ------------------------------------------
    tableBody(data, table);
    area.append(table);
  }
};

showTable();

const pattern = "cat";
const regex = new RegExp(pattern, "g");
const ttt = `
Arar_at
ddfd-sf           5.$
dsfsddsh
1528459+652+9652
----
`;
console.log(regex.test(ttt));

const matches = ttt.match(/d{2}/g);
console.log(matches);

// test() true/false
// match() []/null
// text.replace(regex, word)
// text.split(regex)

console.log(/ar/gi.exec(ttt));
