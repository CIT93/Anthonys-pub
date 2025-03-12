import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { renderTBL } from "./render.js";
import { FORM } from "./global.js";
import { saveLS, cfpData} from "./storage.js";


  const firstNameEL = document.getElementById('firstName');
  const lastNameEL = document.getElementById('lastName');
  const submitEL = document.getElementById('submitError');



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

firstNameEL.addEventListener('blur', validateField);
lastNameEL.addEventListener('blur', validateField);


renderTBL(cfpData)
FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstname = FORM.firstName.value;
  const lastname = FORM.lastName.value;
  const FirstNameIsValid = firstNameEL.value != '';
  const LastNameIsValid = lastNameEL.value != '';
  
  if (FirstNameIsValid && LastNameIsValid ) {
  submitEL.textContent = '';
  const houseHoldMembers = parseInt(FORM.hhmembers.value);
  const houseSize = FORM.houses.value;
  start(firstname, lastname, houseHoldMembers, houseSize)
  saveLS(cfpData)
  renderTBL(cfpData)
  FORM.reset();
  } else {
    submitEL.textContent = "Form requires first and last name";
  }
})

function validateField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};