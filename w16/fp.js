




class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice, sources, single, double, householdPur    ) {
        this.first = first
        this.last = last
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.foodChoice = foodChoice
        this.sources = sources
        this.single = single
        this.double = double
        this.householdPur = householdPur
        this.calhouseHoldPoints();
        this.calhouseSizePoints();
        this.calfoodChoicePoints();
        this.calfoodSourcesPoints()
        this.calwaterConsuPoints()
        this.calhousePurPoints()
        this.caltotal()
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
        } else if (this.foodChoice === "vegeterian") {
            this.foodChoicePoints = 4;
        } else if (this.foodChoice === "Vegan") {
            this.foodChoicePoints = 2;
        }
    }

    calfoodSourcesPoints() {
        if (this.sources === 'packed') {
            this.foodSourcesPoints = 12
        } else if (this.sources === 'balanced') {
            this.foodSourcesPoints = 6
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
            this.housePurPoints = 10
        } else if (this.householdPur === 'five') {
            this.housePurPoints = 8
        } else if (this.householdPur === 'three') {
            this.housePurPoints = 6
        } else if (this.householdPur === 'less') {
            this.housePurPoints = 4;
        } else if (this.householdPur === 'none') {
            this.housePurPoints = 2; 
        }
    }

    caltotal() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints + this.foodSourcesPoints + this.waterConsuPoints + this.housePurPoints
         
    }
}



export { FP }
