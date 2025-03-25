
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { renderTBL } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";


const start = function(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
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
}

const validateField = function(event) {
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
FORM.addEventListener('submit', function (e) {
  e.preventDefault();

  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = ''
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.hhmembers.value), FORM.houses.value, FORM.Food.value)
    cfpData.push(fpObj)
    saveLS(cfpData)
    renderTBL(cfpData)
    FORM.reset();
  } else {
    SUBMIT.textContent = "Form requires first and last name";
  }
})

