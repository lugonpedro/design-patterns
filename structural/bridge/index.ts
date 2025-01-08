import { Radio } from "./radio";
import { RemoteControl } from "./remote-control";
import { RemoteControlWithVolume } from "./remote-control-with-volume";
import { Tv } from "./tv";

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower();

  // Type Guard
  if (!('volumeUp' in abstraction)) return

  abstraction.volumeUp();
  abstraction.volumeUp();
}

const tv = new Tv()
const radio = new Radio()
const radioRemoteControl = new RemoteControl(radio)

clientCode(radioRemoteControl)
console.log(radioRemoteControl.device.getPower())
console.log(radioRemoteControl.device.getVolume())