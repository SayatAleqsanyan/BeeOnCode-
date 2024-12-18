import { newTag, resetData, setData, tableBody } from "./utils.js";

user_name.value = "Ani";
user_surname.value = "Sargsyan";
user_age.value = "25";
user_email.value = "";

// -------------------------------------------------------------------------------
const success_btn = document.querySelector("#success_btn");
success_btn.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (
    /^[a-zA-Z]{3,}/g.test(user_name.value) &&
    /^[a-zA-Z]{5,}/g.test(user_surname.value) &&
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
// console.log(data);

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

    const delAll = document.querySelector('#delAll')
    delAll.addEventListener("click", function (data) {
      table.innerHTML = ''
    });
  }
};

showTable();
