import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { renderTBL } from "./render.js";
import { FORM } from "./global.js";
import { saveLS, cfpData} from "./storage.js";

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push ({
    firstname: first,
    lastname: last,
    houseHm: houseHoldMembers,
    houseS: houseSize,
    houseHpts: houseHoldPTS,
    houseSpts: houseSizePts,
    tot: total,
  });
}   


renderTBL(cfpData)
FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstname = FORM.FirstName.value;
  const lastname = FORM.LastName.value;
  const houseHoldMembers = parseInt(FORM.hhmembers.value);
  const houseSize = FORM.houses.value;
  const isvalid = FormV(firstname, lastname, e) 
  if (isvalid) {
  start(firstname, lastname, houseHoldMembers, houseSize)
  saveLS(cfpData)
  renderTBL(cfpData)
  FORM.reset();
  }
})

function FormV(firstname, lastname, e) {
  const errorEle = document.getElementById('error')
  let messages = []
  if (firstname === '' || firstname === null) {
    messages.push("name is requried")
  }
  
  if (lastname === '' || lastname === null) {
    messages.push("name is requried")
  }
  
  if (messages.length > 0) {
    e.preventDefault()
    errorEle.innerText = messages.join(',  ')
   
  }
}
