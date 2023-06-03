class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `the name of the bike is ${this.name}`;
  }
}
let bike1 = new Vehicle("ninja", "kawasaki", "v6");
console.log(bike1.getDetails());
