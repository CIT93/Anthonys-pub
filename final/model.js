
class Model {
    constructor(range, specs) {
        this.range = range;
        this.spec = specs;
        this.carSpecs()
    }

    carSpecs() {
        // added price, it was the only way for the findMatchingCar function to work properly as intended
        return [
            { model: "Honda Civic", price: 5000, specs: ["Fuel Efficient", "Affordable", "Compact"] },
            { model: "Toyota Yaris", price: 6000, specs: ["Fuel Efficient", "Compact", "Affordable"] },
            { model: "Ford Fiesta", price: 7000, specs: ["Fuel Efficient", "Affordable", "Compact"] },
            { model: "Nissan Sentra", price: 8500, specs: ["Fuel Efficient", "Comfortable", "Affordable"] },
            { model: "Chevrolet Malibu", price: 10000, specs: ["Fuel Efficient", "Comfortable", "Affordable"] },
            { model: "Honda Accord", price: 11500, specs: ["Comfortable", "Reliable", "Fuel Efficient"] },
            { model: "Hyundai Elantra", price: 13000, specs: ["Reliable", "Fuel Efficient", "Comfortable"] },
            { model: "Mazda3", price: 14500, specs: ["Fuel Efficient", "Reliable", "Comfortable"] },
            { model: "Toyota Corolla", price: 16000, specs: ["Reliable", "Fuel Efficient", "Comfortable"] },
            { model: "Ford Escape", price: 17500, specs: ["Safe", "Comfortable", "Spacious"] },
            { model: "Honda CR-V", price: 19000, specs: ["Comfortable", "Reliable", "Safe"] },
            { model: "Subaru Outback", price: 20500, specs: ["All-Wheel Drive", "Off-Road Capable", "Spacious"] },
            { model: "Toyota RAV4", price: 22000, specs: ["All-Wheel Drive", "Spacious", "Comfortable"] },
            { model: "Kia Sorento", price: 23500, specs: ["Comfortable", "Stylish", "Spacious"] },
            { model: "Hyundai Santa Fe", price: 25000, specs: ["Comfortable", "Stylish", "Spacious"] },
            { model: "Chevrolet Traverse", price: 27000, specs: ["Spacious", "Comfortable", "Family-Friendly"] },
            { model: "Ford Explorer", price: 29000, specs: ["Spacious", "Comfortable", "Family-Friendly"] }
        ];
    }
    

    // did need to use ChatGPT for this part as nothing seemed to work when moved it over to the class.
    // functionality is still the exact same, from how the filter works as well as the array.
    // you may get multiple rows being rendered. I'm still rying to figure out what the issue may be.
    findMatchingCars(calcTaxFn) {
        const cars = this.carSpecs();
        const spec = this.spec;
        const range = this.range;
    
        const matchingCars = cars.filter(car =>
            car.specs.includes(spec) && car.price <= range
        );
    
        const results = [];
    
        matchingCars.forEach(car => {
            results.push({
                model: car.model,
                specs: car.specs,
                total: calcTaxFn ? calcTaxFn(car.price) : car.price, 
            });
        });
    
        return results;
    }

}


export {Model}
