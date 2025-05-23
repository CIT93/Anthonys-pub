


import { FORM, TBL, } from "./global.js"
import { saveLS } from "./storage.js"
import { addRow } from "./hof.js"


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
    FORM[1].value = obj.first;
    FORM[2].value = obj.last;
    FORM[3].value = obj.houseMembers;
    FORM[4].value = obj.houseSize;
    FORM[5].value = obj.foodChoice;
    onUpdate(index, data);
  })
  return td;
}


const renderRow = (data) => {
  const tbody = document.createElement("tbody")
  data.forEach( (obj, index) => {
    console.log(index)
    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total" ]
    const tr = document.createElement("tr")
    /* for (const [key, value] of Object.entries(obj)) {
      if (key !== "last" && key !== "houseSizePoints" && key !== "houseHoldPoints" && key !== "foodChoicePoints") { */
      keys.forEach( key => {
      const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
    })
      //}
    // }
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
    table.id = "tableId"
    addRow()
  }
}

 const renderTBlHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingText = ["Name", "household", "housesize","Food Choices", "total", "actions"]
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
