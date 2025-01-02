interface Vehicle {
  pickUp(customer_name: string): void;
  stop(): void
}

class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(customer_name: string) {
    console.log(`Car ${this.name} is picking up ${customer_name}`);
  }

  stop() {
    console.log(`Car ${this.name} is stopping`);
  }
}

class Motorcycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(customer_name: string) {
    console.log(`Motorcycle ${this.name} is picking up ${customer_name}`);
  }

  stop() {
    console.log(`Motorcycle ${this.name} is stopping`);
  }
}

abstract class VehicleFactory {
  abstract getVehicle(vehicle_name: string): Vehicle;

  pickUp(customer_name: string, vehicle_name: string): Vehicle {
    const vehicle = this.getVehicle(vehicle_name)
    vehicle.pickUp(customer_name)
    return vehicle
  }
}

class CarFactory extends VehicleFactory {
  getVehicle(vehicle_name: string): Vehicle {
    return new Car(vehicle_name)
  }
}

class MotorcycleFactory extends VehicleFactory {
  getVehicle(vehicle_name: string): Vehicle {
    return new Motorcycle(vehicle_name)
  }
}

const carFactory = new CarFactory()
const fusca = carFactory.getVehicle('Fusca')
fusca.pickUp('Joana')
fusca.stop()