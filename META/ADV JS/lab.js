// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (var item of dairy) {
        var answer = console.log(item);
    }
    return answer;
}
// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (prop of Object.keys(bird)) {
       var result1 = console.log(prop, ": ", bird[prop]);
    }
    return result1;
}
// Task 3
function animalCan() {
    for (prop in bird) {
        var result2 = console.log(prop, ": ", bird[prop]);
    }
    return result2;
}

logDairy();
birdCan();
animalCan();