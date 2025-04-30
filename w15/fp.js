



class FP {
    constructor(first, last, houseMembers, houseSize, foodChoice) {
        this.first = first
        this.last = last
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.foodChoice = foodChoice
        this.houseHoldPoints();
        this.houseSizePoints();
        this.foodChoicePoints();
        this.total()
    }
    // I kind of got a little stuck when doing this, as you can see
    // I tried Importing Dhhp and Dhhs so they can be used within
    // the evenListener, but after writing it I realized that it didn't really 
    // any sense as to how I was going to call it. So I'm going to commit what I have as of right now.
    houseSizePoints() {
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
    houseHoldPoints() {
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
    foodChoicePoints() {
        if (this.foodChoice === "convenienceDaily") {
            this.foodChoicePoints = 12;
        } else if (this.foodChoice === "domesticDaily") {
            this.foodChoicePoints = 10;
        } else if (this.foodChoice === "domesticOccasional") {
            this.foodChoicePoints = 6;
        } else if (this.foodChoice === "vegeterian") {
            this.foodChoicePoints = 4;
        } else if (this.foodChoice === "Vegan") {
            this.foodChoicePoints = 2;
        }
    }
    
    total() {
        this.total = this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints
    }

}


export { FP }
