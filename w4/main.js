const CFPData = [];

function determineHousesizepts(size) {
    console.log("inside the block scope");
    let houseSizePts = 0;
    if(size === 'large') {
        houseSizePts =  10;
    } else if(size === 'medium') {
        houseSizePts = 7;
    } else if(size === 'small') {
        houseSizePts = 4;
    } else if(size === 'apt') {
        houseSizePts = 2;

    } else {
        console.log('no points added')
    }
    return houseSizePts;
}

function determineHouseHoldpts(numberInHousehold) {
    let houseHoldPts = 0;
    if (numberInHousehold === 1) {
        houseHoldPts = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPts = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPts = 10;
    } else if  (numberInHousehold === 4) {
        houseHoldPts = 8;
    } else if  (numberInHousehold === 5) {
        houseHoldPts = 6;
    } else if  (numberInHousehold === 6) {
        houseHoldPts = 4;
    } else if  (numberInHousehold > 6) {
        houseHoldPts = 2;
    } 
    return houseHoldPts;
}



function start(houseHoldMembers, houseSize) {
    const houseHoldPts = determineHouseHoldpts(houseHoldMembers);
    const houseSizePts = determineHousesizepts(houseSize); 
    const total = houseSizePts + houseHoldPts
    CFPData.push([houseHoldMembers, houseSize, houseHoldPts, houseSizePts, total]);
}

function displayOutput() {
    for (Array of CFPData) {
        console.log(Array)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `Total amount of people in your home: ${Array[0]}, Size of your home: ${Array[1]}, carbon footprint based on members in your home: ${Array[2]}, carbon footprint based on homesize: ${Array[3]}, total carbon footprint: ${Array[4]}`;
        output.appendChild(newP)
    }
}

start(5, "large");
start(4, "large");
start(3, "large");
start(2, "large");
start(1, "large");
start(1, "medium");
start(2, "medium");
start(3, "medium");
start(4, "medium");
start(5, "medium");
start(1, "small");
start(2, "small");
start(3, "small");
start(4, "small");
start(5, "small");
start(1, "apt");
start(2, "apt");
start(3, "apt");
start(4, "apt");
start(5, "apt");

displayOutput()