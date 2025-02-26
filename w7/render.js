
  // I thought of creating another function and storing all the within
  // the new function, but after that I was a bit lost on how to proceed.
  // I kept the orginal code withing the renderTBl function, as I really
  // as I worried something may break.
  function renderTBlHeading() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingText = ["Name", "Total"]
    headingText.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      console.log(th);
  } )
  thead.appendChild(tr);
  table.appendChild(thead);
  console.log(table);
  TBL.appendChild(table);
  return table} 

const TBL = document.getElementById("tab-data")

  function renderTBL(data) {
    const table = renderTBlHeading()
    const tbody = document.createElement("tbody")
    const td = document.createElement("td")
    data.forEach(function(newtext) {
      const tr = document.createElement("tr")
      const tdName = document.createElement("td");
      tdName.textContent = newtext.firstname;
      const tdTotal = document.createElement("td");
      tdTotal.textContent = newtext.tot;
      tr.appendChild(tdName)  
      tr.appendChild(tdTotal) 
      table.appendChild(tbody)
      console.log(td);
    })
  /*  const btnEdit = document.createElement("Button")
  const btnDel = document.createElement("Button") */
/*   btnEdit.textContent = "Edit"
  btnDel.textContent = "Del"
  td.appendChild(btnEdit)
  td.appendChild(btnDel)  */
  tr.appendChild(td)
  tbody.appendChild(tr)
  console.log(table)
  } 
  
  export {renderTBL, renderTBlHeading}