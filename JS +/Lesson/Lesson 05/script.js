// localStorage.setItem("token", [1, 2, 3, 4, 5, 6])
// localStorage.setItem("token2", {key: 555})
// localStorage.setItem("token3", "HGKJHGJVHJGHBDCGHFGNVGCHFCRHVGJCDXCFVJBHVGFGXHCJVH")
// sessionStorage.setItem("token4", "HGKJHGJVHJGHBDCGHFGNVGCHFCRHVGJCDXCFVJBHVGFGXHCJVH")

// // console.log(localStorage.getItem("tokensssdsfsf"));

// // localStorage.removeItem('token')

// console.log(localStorage.getItem("token"));

// // --------------------------------------------------------------------------------
// // JSON - JavaScript Object Notation
// // --------------------------------------------------------------------------------

// let obj1 = {
//   name: "Ani",
//   surname: "Sargsyan",
// }
// console.log(JSON);

// // Վերափոխում ենք JSON տիպի
// console.log(JSON.stringify(obj1));
// localStorage.setItem("token2", JSON.stringify(obj1))

// // վերափոխում ենք JS տիպի
// console.log(localStorage.getItem("token2"));
// let myObj = JSON.parse(localStorage.getItem("token2"))
// console.log(myObj);

// -------------------------------------------------------------------------------
const success_btn = document.querySelector("#success_btn");
success_btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    user_name.value &&
    user_surname.value &&
    user_age.value &&
    user_email.value
  ) {
    const user_data = {
      user_name: user_name.value,
      user_surname: user_surname.value,
      user_age: user_age.value,
      user_email: user_email.value,
    };

    const data = localStorage.getItem('users')

    if (!data) {
      localStorage.setItem('users', JSON.stringify([user_data]))
    } else {
      const oldData = JSON.parse(data)
      oldData.push(user_data)
      localStorage.setItem('users', JSON.stringify(oldData))
    }

    user_name.value = ''
    user_surname.value = ''
    user_age.value = ''
    user_email.value = ''

    
    showTable()
  }
});

const showTable = () => {
  let data = localStorage.getItem('users')
  
  if (data) {
    data = JSON.parse(data)
    const table_keys = Object.keys(data[0])
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    for (const key in table_keys) {
      const th = document.createElement('th')
      th.innerHTML = table_keys[key]
      tr.append(th)
    }
    table.append(tr)

    // ------------------------------------------
    for (const user in data) {
      const tr = document.createElement('tr')
      for (const value in data[user]) {
        const td = document.createElement('td')
        td.innerHTML = data[user][value]
        tr.append(td)
      }
      table.append(tr)
    }


    area.append(table)

  }
  
  
}

showTable()