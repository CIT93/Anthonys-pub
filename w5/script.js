/* const cfpData = [];

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

function displayOutputObj(obj) {
  console.log(obj)
  const output = document.getElementById("output");
  const newP = document.createElement("p");
  const newH2 = document.createElement("h2")
  newH2.textContent = `Carbon Footprint ${obj.tot}`
  const newH3 = document.createElement("h3")
  newH3.textContent = `based on number of Household and Size of Home`
  newP.textContent = ` This number is based on the number of members in the home of ${obj.houseHm} (score: ${obj.houseHpts}`;
  newP.textContent += `and is ${obj.houseS} size of home (score ${obj.houseSpts}`  
  output.appendChild(newH2);
   output.appendChild(newH3)
  output.appendChild(newP); 
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
    cfpData.push({
    houseHm: houseHoldMembers,
    houseS: houseSize,
    houseHpts: houseHoldPTS,
    houseSpts: houseSizePts,
    tot: total,
  });
  
}

  
 
function displayOutput() {
    for(obj of cfpData) {
      console.log(obj)
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      const newH2 = document.createElement("h2")
      newH2.textContent = `Carbon Footprint ${obj.tot}`
      const newH3 = document.createElement("h3")
      newH3.textContent = `based on number of Household and Size of Home`
      newP.textContent = ` This number is based on the number of members in the home of ${obj.houseHm} (score: ${obj.houseHpts}`;
      newP.textContent += `and is ${obj.houseS} size of home (score ${obj.houseSpts}`  
      output.appendChild(newH2);
       output.appendChild(newH3)
      output.appendChild(newP); 
    }
}

 

start(1, "apt");
start(2, "apt");
start(3, "apt");
start(4, "apt");
start(5, "apt");
start(6, "apt");
start(7, "apt");
start(1, "small");
start(2, "small");
start(3, "small");
start(4, "small");
start(5, "small");
start(6, "small");
start(7, "small");
start(1, "medium");
start(2, "medium");
start(3, "medium");
start(4, "medium");
start(5, "medium");
start(6, "medium");
start(7, "medium");
start(1, "large");
start(2, "large");
start(3, "large");
start(4, "large");
start(5, "large");
start(6, "large");
start(7, "large"); 


displayOutput()

 */



const movieArray = [
  {title: "John Wick 4", date: "2023", rating: "94%"}, 
  {title: "spider man across the spider verse", date: "2023", rating: "95%"}, 
  {title: "Deadpool & Wolverine", date: "2024", rating: "94%"}, 
]

function displayMovies() {
  const output = document.getElementById("output");
  for (obj of movieArray) {
    
    console.log(obj); 
    const newh2 = document.createElement("h2");
    newh2.textContent = `the movie ${obj.title}, with a rating of ${obj.rating}, was released in ${obj.dateate}.`
    output.appendChild(newh2);
  }
    
}

displayMovies()
