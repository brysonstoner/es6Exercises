//create a class-subclass structure and implement it using javascript classes.
//be sure each have at least one method on them.

class spaceDawgz {

    constructor (name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getWeight() {
        return "The dawg named " + this.name + " weighs " + this.weight + " lbs!!!"
    }
}

let spaceDawg1 = new spaceDawgz("Pluto", 1000);

console.log(spaceDawg1.getWeight());