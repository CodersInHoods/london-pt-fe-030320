const Person = require("./Person")

class Nurse extends Person {

    train(type) {
        this._covidTrained = type === "COVID"
    }

    sayYourName() {
        console.log(`my name is nurse ${this._name}`)
    }
    
    greet() {
        super.greet()
        console.log("what are your symptoms?")
    }


  doSomething() {
    console.log("do that")
}
}

module.exports = Nurse

const vasile = new Nurse("vasile", 45, "bath")
vasile.train("COVID")
console.log(vasile)

const sam = new Person("sam", 22, "london")

sam.greet()
vasile.greet()