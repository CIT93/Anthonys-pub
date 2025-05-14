








import { renderTBL } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import { FP } from "./fp.js";




const validateField = function (event) {
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

    let selectedRecycle = [];
    const select = document.querySelector('select[name="recycle"]');

    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].selected) {
            selectedRecycle.push(select.options[i].value);
        }
    }


    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = ''
        const fpObj = new FP(
            FNAME.value,
            LNAME.value,
            parseInt(e.target.hhmembers.value),
            e.target.houses.value,
            e.target.Food.value,
            e.target.sources.value,
            parseInt(e.target.single.value),
            parseInt(e.target.double.value),
            e.target.householdP.value,
            e.target.garbageWaste.value,
            selectedRecycle,
            e.target.personal.value,
            e.target.publics.value,
            e.target.flights.value)
        cfpData.push(fpObj)
        saveLS(cfpData)
        renderTBL(cfpData)
        FORM.reset();
    } else {
        SUBMIT.textContent = "Form requires first and last name";
    }
})
