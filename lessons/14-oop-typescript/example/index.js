console.log("we are in a TS file!");
var sayHello = function (user) { return "Hello, " + user.firstName; };
// sayHello("Sam");
// sayHello({ name: "Sam" });
sayHello({ firstName: "Sam" });
sayHello({ firstName: "Sam", lastName: "Barker" });
var family = [{ firstName: "Sam" }, { firstName: "Joe" }];
var extendedFamily = [{ firstName: "Sam" }, { firstName: "Joe" }];
var ages = [0, 1, 6];
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        var _this = this;
        this.changeFirstName = function (newFirstName) {
            _this.firstName = newFirstName;
        };
        this.changeLastName = function (newLastName) {
            _this.lastName = newLastName;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        setTimeout(function () {
            _this.changeLastName("baker");
        });
    }
    return Student;
}());
var student = new Student("Sam", "Barker", 29);
student.changeFirstName("barry");
student.changeLastName("baaaaaaaaker");
console.log(student);
