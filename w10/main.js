import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { renderTBL } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";



/* const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseHoldPts();
  const houseSizePts = determineHouseSizePts();
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstname: first,
    lastname: last,
    houseHm: houseHoldMembers,
    houseS: houseSize,
    houseHpts: houseHoldPTS,
    houseSpts: houseSizePts,
    tot: total,
  });
} */
const start = (...i) => {
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const houseSizePts = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstname: i[0],
    lastname: i[1],
    houseHm: i[2],
    houseS: i[3],
    houseHpts: houseHoldPTS,
    houseSpts: houseSizePts,
    tot: total,
  });
}

const validateField = (event) => {
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

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


renderTBL(cfpData)
FORM.addEventListener('submit',  (e) => {
  e.preventDefault();

  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = ''
    start(FNAME.value, LNAME.value, parseInt(FORM.hhmembers.value), FORM.houses.value)
    saveLS(cfpData)
    renderTBL(cfpData)
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
})

