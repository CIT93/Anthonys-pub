// members of houshold
const hhMembers = 3;

// size of home
const homeSize = 2;

// food choices
const foodChoi = 10;

// water consumption
const waterCons = 2;

// household purchases
const houseHoldPur = 6;

// waste management
const wasteProd = 3;

// waste recycle
const wRecycle = 24;

// annual transportation
const PerTransport = 6;
const pubTransport = 0;
const flightS = 2;

// Tallied score
const finalScore = hhMembers + homeSize + foodChoi + waterCons + houseHoldPur 
+ wasteProd + wRecycle + PerTransport + pubTransport + flightS;

// JS to update redenered html
const myHeading = document.querySelector("h2");
myHeading.textContent = "Final Score = " + finalScore;
