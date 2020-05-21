console.log("we are in a TS file!");

const sayHello = (user: Person) => `Hello, ${user.firstName}`;

// sayHello("Sam");
// sayHello({ name: "Sam" });

sayHello({ firstName: "Sam" });
sayHello({ firstName: "Sam", lastName: "Barker" });
// sayHello({ firstName: "Sam"});

interface Person {
  firstName: string;
  lastName?: string;
  age?: number;
  dead?: boolean;
  mother?: Person;
  father?: Person;
}

const family: Person[] = [{ firstName: "Sam" }, { firstName: "Joe" }];
const extendedFamily: Array<Person> = [{ firstName: "Sam" }, { firstName: "Joe" }];

const ages: number[] = [0, 1, 6];

class Student {
    private firstName: string;
    private lastName: string;
    private age: number;

    public changeFirstName = (newFirstName: string) => {
        this.firstName = newFirstName
    }

    private changeLastName = (newLastName: string) => {
        this.lastName = newLastName
    }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        setTimeout(() => {
            this.changeLastName("baker")
        })
    }
}

const student: Student = new Student("Sam", "Barker", 29);

student.changeFirstName("barry")

// student.changeLastName("baaaaaaaaker")


console.log(student);