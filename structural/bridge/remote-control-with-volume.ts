import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }
}