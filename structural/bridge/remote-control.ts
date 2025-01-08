import { DeviceImplementation } from "./device-implementation";

export class RemoteControl {
  constructor(public device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
  }
}