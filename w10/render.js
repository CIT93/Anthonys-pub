import { FORM, TBL, } from "./global.js"
import { saveLS } from "./storage.js"

const onUpdate = (index, data) => {
  data.splice(index, 1)
  renderTBL(data)
  saveLS(data)
}

const renderTBLButtons = (obj, index, data) => {
  const td = document.createElement("td")
  const btnEdit = document.createElement("Button")
  const btnDel = document.createElement("Button")
  btnEdit.textContent = "Edit"
  btnDel.textContent = "Del"
  td.appendChild(btnEdit)
  td.appendChild(btnDel)

  btnDel.addEventListener('click',  (e) => {
    onUpdate(index, data);
  })

  btnEdit.addEventListener('click',  (e) => {
    FORM[1].value = obj.firstname;
    FORM[2].value = obj.lastname;
    FORM[3].value = obj.houseHm;
    FORM[4].value = obj.houseS;
    onUpdate(index, data);
  })
  return td;
}


const renderRow = (data) => {
  const tbody = document.createElement("tbody")
  data.forEach( (obj, index) => {
    console.log(index)
    const tr = document.createElement("tr")
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastname" && key !== "houseHpts" && key !== "houseSpts") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);

      }
    }
    const td = renderTBLButtons(obj, index, data);
    tr.append(td)
    tbody.appendChild(tr);
  });
  return tbody;
}

const renderTBL = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTBlHeading()
    const tbody = renderRow(data)
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}

const renderTBlHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingText = ["Name", "household", "housesize", "total", "actions"]
  headingText.forEach( (text,) => {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
    console.log(th);
  })
  thead.appendChild(tr);
  table.appendChild(thead);
  console.log(table);
  TBL.appendChild(table);
  return table
}

export { renderTBL, renderTBlHeading }
