const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if(size === "large") {
    houseSizePoints = 10;
  } else if(size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function displayOutput() {
  for (obj of cfpData) {
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    const newH1 = document.createElement("h1");
    newH1.textContent = `Your first name is: ${obj.firstname} and last is: ${obj.lastname}`;
    newH2.textContent = `And your Carbon Footprint is: ${obj.tot}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on the number of Household members and Size of Home.`;
    newP.textContent = `This number is based on the number of members in the home of: ${obj.houseHm} with a score of: ${obj.houseHpts},`;
    newP.textContent += ` and your size of home (${obj.houseS}), with a score of: ${obj.houseSpts}`;
    OUTPUT.appendChild(newH1);
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
  }  
}

function start(houseHoldMembers, houseSize, firstname, lastname) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    houseHm: houseHoldMembers,
    houseS: houseSize,
    houseHpts: houseHoldPTS,
    houseSpts: houseSizePts,
    tot: total,
    firstname: firstname,
    lastname: lastname,
  });
}

FORM.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstname = FORM.firstName.value;
  const lastname = FORM.lastName.value;
  const houseHoldMembers = parseInt(FORM.hhmembers.value);
  const houseSize = FORM.houses.value;

  start(houseHoldMembers, houseSize, firstname, lastname);
  OUTPUT.innerHTML = ""; 
  displayOutput(); 
  FORM.reset();
});
