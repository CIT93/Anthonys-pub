

import { cfpData } from "./storage.js"


function averageData() {
const avgTotal = cfpData.reduce((sum, fp) => sum + fp.total, 0 )
const average = avgTotal / cfpData.length
console.log(average)
return average
}

function addRow() {
    let tableRef = document.getElementById("tableId")

    let newRow = tableRef.insertRow(-1)

    let newCell = newRow.insertCell(0) 
    let newCell1 = newRow.insertCell(1)
            let newCell2 = newRow.insertCell(2)
         /*    let newCell3 = newRow.insertCell(3)
            let newCell4 = newRow.insertCell(4)
            let newCell5 = newRow.insertCell(5)  */

    let average = document.createTextNode("average")
    newCell1.appendChild(average)
    
    let avgValue = averageData()
    let score = document.createTextNode(avgValue)
    newCell2.appendChild(score)


}

export {addRow}
