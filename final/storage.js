
let result = getLS()


// I used the local storage code we did a few assignemnts back, 
// surprisngly it works. 
function save(results) {
    const serArray = JSON.stringify(results)
    localStorage.setItem("result", serArray)
}

function getLS() {
    const retrArray = localStorage.getItem("result")
    if(retrArray !== null) {
        return JSON.parse(retrArray)
    } else {
        return [];
    }
}

export {result, save, getLS}
