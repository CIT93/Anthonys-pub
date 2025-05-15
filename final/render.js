

import { FORM, REND, RANGE, SPECS} from "./global.js"
import { save } from "./storage.js"

function onUpdate(index, results) {
    results.splice(index, 1)
    renderTBL(results)
    save(results)
}

function buttonsDrow( obj, index, results ) {
   
    const td = document.createElement("td")
    const edit = document.createElement("button")
    const del = document.createElement("button")
    edit.textContent = 'Edit'
    del.textContent = 'delete'
    td.append(del)
    td.append(edit)

    del.addEventListener('click', function (e) {
        console.log('Delete clicked:', index);
        results.splice(index, 1)
        save(results)
        renderTBL(results)
    })


        // Completely does not work, issue still hasn't been found.
     /* edit.addEventListener('click', function () {
       FORM[1].value = obj.range;
       FORM[2].value = obj.specs;
       onUpdate(index, results)
    
        console.log("Range value after setting:", FORM[1].value);
        console.log("Specs value after setting:", FORM[2].value);
    }); */
    
      

    return td
}

// For some reason the pricing is the same for all cars depending on the budget you input, Will fix.
function renderData(results) {
    const tBody = document.createElement("tbody")
    
    results.forEach(function (obj, index) {
        const tr = document.createElement("tr");

        // I did use chatGPT for this section since it wouldn't render using any other methods.

        // the for loop is going threw each "key" in the "obj"
        for (let key in obj) {
            
            // This just skips the keys I don't want rendered.
            if ( key === "budgets"|| key === "decision" || key === "pricing") {
                continue;
            }

            const td = document.createElement("td");
            // Accessing the value of the current key within the obj. 
            let value = obj[key];

            // Check if the key is the known array field.
            if (key === "specs") {
                // if the key IS specs, then it is an array, and will be 
                // displayed with a comma seperated string. Otherwise
                // it will display normally
                td.textContent = value.join(", ");
            } else {
                td.textContent = value;
            }
            tr.appendChild(td);
        }
        const td = buttonsDrow( obj, index, results )
        tr.append(td)
        tBody.appendChild(tr);
    });
    return tBody
}

function renderTBL(results) {
    REND.innerHTML = '';
    if (results.length !== 0) {
    const tBody = renderData(results)
    const table = heading()
    table.append(tBody)
    REND.append(table)
    }
}

function heading() {
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")

    const headingArr = ["Car", "Specs", "Pricing", "action"]

    headingArr.forEach(function (text) {
        const th = document.createElement("th")
        th.textContent = text
        tr.append(th)
    })

    thead.appendChild(tr)
    table.append(thead)
    return table;

}

export { renderTBL }
