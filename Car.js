class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isEngineRunning = false;
  }

  start() {
    if (this.isEngineRunning) {
      console.log("The car is already running.");
    } else {
      this.isEngineRunning = true;
      console.log("The car is now running.");
    }
  }

  turnOff() {
    if (this.isEngineRunning) {
      this.isEngineRunning = false;
      console.log("The car is now turned off.");
    } else {
      console.log("The car is already turned off.");
    }
  }
}

// Example usage:
const myCar = new Car("Toyota", "Camry", 2022);

console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}.`);

myCar.start(); // Output: The car is now running.
myCar.turnOff(); // Output: The car is now turned off.
myCar.turnOff(); // Output: The car is already turned off.
