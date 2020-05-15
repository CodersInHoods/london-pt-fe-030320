const Nurse = require("./Nurse")

class CovidNurse extends Nurse {
    
    greet() {
        super.greet()
        console.log("please keep your distance")
    }

    doSomething() {
        // super.super.doSomething()
    }
}

const sam = new CovidNurse("sam covidf", 22, "london")

sam.greet()

sam.doSomething()