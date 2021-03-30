class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const lee = new Human("Lee", 81, "female");
const person = {
  name: "benjamin",
  gender: "male",
  age: 22,
};

const sayHi = (person: Human): string => {
  return `hello ${person.name}, you are ${person.age}, you're a ${person.gender}`;
};

console.log(sayHi(lee));

export {};
