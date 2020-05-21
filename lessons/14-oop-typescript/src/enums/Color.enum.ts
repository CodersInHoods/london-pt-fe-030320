export enum Color {
  Black = "black",
  Red = "red",
}

export default Color;

const nameAndAgeAndOtherMisc: [string, number, ...any[]] = ["Sam", 29];

interface Person {
  name: string;
  age?: number;
}

const user: Person | undefined = { name: "Sam" };

const stringifiedAge = user.age?.toString();
