const newTag = function (tegNem, idN, text = "", ...classN) {
  const nam = document.createElement(tegNem);
  classN.length ? nam.classList.add(...classN) : null;
  idN ? (nam.id = idN) : null, text ? (nam.innerHTML = text) : null;
  return nam;
};

const tableBody = (data, table, showTable) => {
  for (const user in data) {
    const tr = document.createElement("tr");
    for (const value in data[user]) {
      const td = document.createElement("td");
      // FIXME: add user when value === id
      td.innerHTML = data[user][value];
      tr.append(td);
    }
    const btn = newTag("button", "", "Delete", "btn", "btn-danger");
    btn.addEventListener("click", function (e) {
      // FIXME: add delete logic
      // console.log(data[user]);
      let mainData = localStorage.getItem("users");

      localStorage.setItem(
        "users",
        JSON.stringify(
          JSON.parse(mainData).filter((u) => {
            return u.id !== data[user].id;
          })
        )
      );

      let item = e.target.closest("tr");
      item.remove();
    });
    const td = newTag("td", "");
    td.append(btn);
    tr.append(td);
    table.append(tr);
  }
};

const resetData = () => {
  user_name.value = "";
  user_surname.value = "";
  user_age.value = "";
  user_email.value = "";
};

const setData = () => {
  return {
    id: Date.now(),
    user_name: user_name.value,
    user_surname: user_surname.value,
    user_age: user_age.value,
    user_email: user_email.value,
  };
};
export { newTag, tableBody, resetData, setData };
