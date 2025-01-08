export interface Vehicle {
  pickUp(customer_name: string): void;
  stop(): void
}

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(customer_name: string) {
    console.log(`Car ${this.name} is picking up ${customer_name}`);
  }

  stop() {
    console.log(`Car ${this.name} is stopping`);
  }
}

export class Motorcycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customer_name: string) {
    console.log(`Motorcycle ${this.name} is picking up ${customer_name}`);
  }

  stop() {
    console.log(`Motorcycle ${this.name} is stopping`);
  }
}
