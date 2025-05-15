

import { errorB, errorS, budget, REND, specs, FORM, RANGE, SPECS } from "./global.js";
import { renderTBL } from "./render.js";
import { result, save } from "./storage.js";
import { Model } from "./model.js";



// this block checks if the input/range is in a valid range
// if not, a message will display but if so the code will continue onto the next block.
function calcTax(pricing) {
    const salesTax = 7.9;

    if (pricing >= 5000 && pricing <= 30000) {
        let taxAmount = pricing * (salesTax / 100);
        return pricing + taxAmount;
    }

    return pricing;
}



function validation() {
    let hasError = false

    const eB = document.getElementById("errorBudget")
    const eR = document.getElementById("errorSpecs")
    const budgets = parseInt(budget.value);

    errorB.innerText = '';
    errorS.innerText = '';

    if (isNaN(budgets) || budgets < 5000 || budgets > 30000) {
        eB.textContent = 'Please enter a budget between $5000 and $30000';
        hasError = true;
    } else {
        const model = new Model(budgets, specs.value);
        const matches = model.findMatchingCars();

        if (matches.length === 0) {
            eB.textContent = 'There is no car with the available specs, please try again.';
            hasError = true;
        }
    }

    ///////
    if (specs.value === '') {
        eR.textContent = 'Please select an option'
        hasError = true
    }
    ///////

    return !hasError;
}



renderTBL(result)
FORM.addEventListener('submit', function (e) {
    e.preventDefault()
    if (!validation()) {
        return;
    }

    const modelObj = new Model(parseInt(RANGE.value), SPECS.value);

    REND.innerHTML = '';
    // passes calc tax as a function for my calculations
    const matchingCars = modelObj.findMatchingCars(calcTax);
    // loops through the mathcing car array and pushes it to the result array
    matchingCars.forEach(car => result.push(car));
    /* result.push(modelObj) */ // this was the issue as to why my inputs were getting rendered as well.
    save(result)
    renderTBL(result)
    FORM.reset()


})
