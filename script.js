const Mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

const John = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

console.log(Mark.calcBMI() < John.calcBMI() ? `John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})`: `Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI}).`);



// const Mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
// }

// const John = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
// }

// calcBMI = function(){
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
// }

// console.log(calcBMI.call(Mark) < calcBMI.call(John) ? `John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})`: `Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI}).`);
