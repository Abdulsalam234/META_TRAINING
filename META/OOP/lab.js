class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
        console.log('The current energy level is :', this.energy);
    }

    doSomethingFun() {
        this.energy -= 10;
        console.log('The current energy level is :', this.energy);
    }
}

class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log('The current xp level is :', this.xp);
    }
}

// var intern = new Worker("Bob", 21, 110, 0, 10);
// intern.goToWork();

// var manager = new Worker("Alice", 30, 120, 100, 30);
// manager.doSomethingFun();


// Task 3: Code an intern object, run methods
function intern() {
    var result1 = new Worker("Bob", 21, 110, 0, 10);
    result1.goToWork();
    return result1;
}

// Task 4: Code a manager object, methods
function manager() {

    var result2 = new Worker("Alice", 30, 120, 100, 30);
    result2.doSomethingFun();
    return result2;
}

intern();
manager();