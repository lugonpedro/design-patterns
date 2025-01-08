export interface DeviceImplementation {
  getName(): string;
  setPower(status: boolean): void;
  getPower(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
}