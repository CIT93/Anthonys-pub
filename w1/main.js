console.log("hello from insde the main.js file");

/* let myVar; */

const myVar = 42;
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);


if(myVarType === "number") {
    console.log(`will this line run? `)
} else {
    console.log(`Or this line?`)
}

function runNow () {
    if(myVarType === "number") {
        console.log(`will this line run? `)
    } else {
        console.log(`Or this line?`)
    }
}

runNow()
runNow();
