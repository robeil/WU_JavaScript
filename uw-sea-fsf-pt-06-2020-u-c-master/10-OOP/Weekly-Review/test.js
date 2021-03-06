'use strict'

// Encapsulation

class Hedgehog {
  constructor(name) {
    // this.speed = 10000;
    let speed = 10000; // This is private
    this.name = name;
    this.zoom = function () {
      // both name and speed are accessible from here
      console.log(
        // `${this.name} zooms with the speed of ${this.speed} km per hour!`
        `${this.name} zooms with the speed of ${speed} km per hour!` // This has access to private speed
      );
    };
  }
}

const sonic = new Hedgehog('Sonic');

console.log(`The hedgehog's name is ${sonic.name}.`);
console.log(`${sonic.name}'s speed is ${sonic.speed} km/hr`);
sonic.zoom();

// INHERITANCE

class Tree {
  constructor(name) {
    this.name = name;
    this.trunk = true;
  }
}

const bananaTree = new Tree('banana');
// console.log(bananaTree.name);
// console.log(bananaTree.trunk);

// ABSTRACTION

class Person {
  constructor({ firstName, lastName, job }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
  }
}

class Job {
  constructor({ company, position, salary }) {
    this.company = company;
    this.position = position;
    this.salary = salary;
  }
}

const Kawhi = new Person({
  firstName: 'Kawhi',
  lastName: 'Leonard',
  job: new Job({ company: 'NBA', position: 'AllStar', salary: '$$' })
});

console.log(Kawhi);

Person.prototype.defense = function () {
  if (this.firstName === 'Kawhi') {
    console.log(
      `${this.firstName} ${this.lastName} can play some great defense`
    );
  } else {
    console.log(`Try again next year`);
  }
};

Kawhi.defense();
console.log(Kawhi.job);
