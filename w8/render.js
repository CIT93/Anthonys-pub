const TBL = document.getElementById("tab-data")

function renderTBLButtons(index, data){
  const td = document.createElement("td")
  const btnEdit = document.createElement("Button")
  const btnDel = document.createElement("Button") 
  btnEdit.textContent = "Edit"
  btnDel.textContent = "Del"
  td.appendChild(btnEdit)
  td.appendChild(btnDel) 
  btnDel.addEventListener('click', function(e) {
    console.log("hello from inside the delete button")
    console.log(e)
    data.splice(index, 1)
    renderTBL(data)
  })
  btnEdit.addEventListener('click', function(e){

  })
  return td;
}


function renderRow(data) {
  const tbody = document.createElement("tbody")
  data.forEach(function(obj, index) {
    console.log(index)
    const tr = document.createElement("tr")
    for(const [key, value] of Object.entries(obj)) {
      if (key !== "lastname" && key !== "houseHpts" && key !== "houseSpts" ) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);   
        
      }
    }
    const td = renderTBLButtons(index, data);
    tr.append(td)
    tbody.appendChild(tr);  
    });
return tbody;
}


// forgot to leave a note on my previous commit, butfor attempting the first code challenge I made the new function, 
// and cut most of the code that was in TBL into the function, I then created renderRow threw my tbody 
// variable. I ended recieving a undefined errors. Just Now after looking back, I forgot to create my tbody element in my
// renderRow(data) function.
function renderTBL(data) {
  const table = renderTBlHeading()
  const tbody = renderRow(data)
  table.appendChild(tbody);
  TBL.appendChild(table);
} 
  
  // I thought of creating another function and storing all the within
  // the new function, but after that I was a bit lost on how to proceed.
  // I kept the orginal code withing the renderTBl function, as I really
  // as I worried something may break.
  function renderTBlHeading() {
    TBL.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingText = ["Name", "household", "housesize", "total", "actions"]
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

  export {renderTBL, renderTBlHeading}