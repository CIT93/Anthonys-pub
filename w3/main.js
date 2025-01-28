/* function determineHouseHoldpts(numberInHousehold) {
    console.log("inside the function");
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if  (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if  (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if  (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if  (numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    } 
    console.log(`based on the number of members, the household will be ${numberInHousehold} the points would be ${carbonFootprintPoints}`) 
}

let carbonFootprintPoints = 0;
const numberInHouseHold = 3;

determineHouseHoldpts(3)
determineHouseHoldpts(4) */

/* my code */

const homeSize = ""
let homeSizePts = 0

if (homeSize === "small") {
    homeSizePts === homeSizePts + 10
} else if(homeSize === "medium") {
    homeSizePts === homeSizePts + 7
} else if(homeSize === "large") {
    homeSizePts === homeSizePts + 4
} else if(homeSize === "apartment") {
    homeSizePts === homeSizePts + 2
}
console.log(`If your house is ${homeSize} then your carbon footprint is: ${homeSizePts}`)