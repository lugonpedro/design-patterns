import { Car, Motorcycle, Vehicle } from "./vehicle"

export abstract class VehicleFactory {
  abstract getVehicle(vehicle_name: string): Vehicle;

  pickUp(customer_name: string, vehicle_name: string): Vehicle {
    const vehicle = this.getVehicle(vehicle_name)
    vehicle.pickUp(customer_name)
    return vehicle
  }
}

export class CarFactory extends VehicleFactory {
  getVehicle(vehicle_name: string): Vehicle {
    return new Car(vehicle_name)
  }
}

export class MotorcycleFactory extends VehicleFactory {
  getVehicle(vehicle_name: string): Vehicle {
    return new Motorcycle(vehicle_name)
  }
}