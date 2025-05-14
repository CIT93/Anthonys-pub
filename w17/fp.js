
class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, sources, single, double, householdPur, garbageWaste, recycle, personal, publics, flights ) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodChoice = foodChoice;
        this.sources = sources;
        this.single = single;
        this.double = double;
        this.householdPur = householdPur;
        this.garbageWaste = garbageWaste;
        this.recycle = recycle;
        this.personal = personal;
        this.publics = publics;
        this.flights = flights;
        this.calhouseHoldPoints();
        this.calhouseSizePoints();
        this.calfoodChoicePoints();
        this.calfoodSourcesPoints();
        this.calwaterConsuPoints();
        this.calhousePurPoints();
        this.calgarbageWastePoints();
        this.calrecylcePoints();
        this.calPersonalTransportationPoints();
        this.calPublicTransporationPoints();
        this.calflightsPoints();
        this.caltotal();
    }

    calhouseSizePoints() {
        if (this.houseSize === "large") {
            this.houseSizePoints = 10;
        } else if (this.houseSize === "medium") {
            this.houseSizePoints = 7;
        } else if (this.houseSize === "small") {
            this.houseSizePoints = 4;
        } else if (this.houseSize === "apt") {
            this.houseSizePoints = 2;
        }
    }

    calhouseHoldPoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
        } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
        } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
        } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
        } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
        } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
        } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 2;
        }
    }

    calfoodChoicePoints() {
        if (this.foodChoice === "domesticDaily") {
            this.foodChoicePoints = 10;
        } else if (this.foodChoice === "domesticOccasional") {
            this.foodChoicePoints = 6;
        } else if (this.foodChoice === "vegetarian") {
            this.foodChoicePoints = 4;
        } else if (this.foodChoice === "Vegan") {
            this.foodChoicePoints = 2;
        }
    }

    calfoodSourcesPoints() {
        if (this.sources === 'packed') {
            this.foodSourcesPoints = 12;
        } else if (this.sources === 'balanced') {
            this.foodSourcesPoints = 6;
        } else if (this.sources === 'local') {
            this.foodSourcesPoints = 2;
        }
    }

    calwaterConsuPoints() {
        const calculatePoints = (val) => {
            if (val === 9) return 3;
            if (val > 4 && val < 9) return 2;
            if (val > 1 && val < 3) return 1;
            if (val === 0 || val === null || val === undefined) return 0;
            return 0;
        };

        if (this.double !== null && this.double !== undefined) {
            this.waterConsuPoints = calculatePoints(this.double) * 2;
        } else {
            this.waterConsuPoints = calculatePoints(this.single);
        }
    }

    calhousePurPoints() {
        if (this.householdPur === 'seven') {
            this.housePurPoints = 10;
        } else if (this.householdPur === 'five') {
            this.housePurPoints = 8;
        } else if (this.householdPur === 'three') {
            this.housePurPoints = 6;
        } else if (this.householdPur === 'less') {
            this.housePurPoints = 4;
        } else if (this.householdPur === 'none') {
            this.housePurPoints = 2;
        }
    }

    calgarbageWastePoints() {
        if (this.garbageWaste === 'four') {
            this.garbageWastePoints = 50;
        } else if (this.garbageWaste === 'three') {
            this.garbageWastePoints = 40;
        } else if (this.garbageWaste === 'two') {
            this.garbageWastePoints = 30;
        } else if (this.garbageWaste === 'one') {
            this.garbageWastePoints = 20;
        } else if (this.garbageWaste === 'half') {
            this.garbageWastePoints = 4;
        }
    }

    calrecylcePoints() {
        const max = 24;
        let deductionPerItem = 4;
        const count = this.recycle.length
        
        this.recylcePoints = max - (count * deductionPerItem);

        

    }

    calPersonalTransportationPoints() {
        if (this.personal === 'ten') {
            this.personalPoints = 12;
        } else if (this.personal === 'nine') {
            this.personalPoints = 10;
        } else if (this.personal === 'eight') {
            this.personalPoints = 6;
        } else if (this.personal === 'seven') {
            this.personalPoints = 4;
        } else if (this.personal === 'six') {
            this.personalPoints = 0;
        }
    }    
        calPublicTransporationPoints() {
        if (this.publics === 'five') {
            this.publicPoints = 12;
        } else if (this.publics === 'four') {
            this.publicPoints = 10;
        } else if (this.publics === 'three') {
            this.publicPoints = 6;
        } else if (this.publics === 'two') {
            this.publicPoints = 3;
        } else if (this.publics === 'one') {
            this.publicPoints = 2;
        } else if (this.publics === 'zero') {
            this.publicPoints = 0;
        }
    }    
        
        calflightsPoints() {
        if (this.flights === 'short') {
            this.flightsPoints = 2;
        } else if (this.flights === 'further') {
            this.flightsPoints = 6;
        } else if (this.flights === 'far') {
            this.flightsPoints = 20;
        } 
    }

    caltotal() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints +
            this.foodSourcesPoints + this.waterConsuPoints + this.housePurPoints +
            this.garbageWastePoints + this.recylcePoints + this.personalPoints + this.publicPoints + this.flightsPoints;     
    }
}



export { FP }
