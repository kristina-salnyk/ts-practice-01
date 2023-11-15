enum VehicleType {
  Car,
}

interface BaseVehicle {
  startupConsumption: number;
  workConsumption: number;
  tankCapacity: number;
  fuelLevel: number;
  model: string;
  vendor: string;
  startEngine: () => void;
  stopEngine: () => void;
  refuel: () => void;
}

class Car implements BaseVehicle {
  static type: VehicleType.Car;

  startupConsumption: number;
  workConsumption: number;
  tankCapacity: number;

  intervalId: ReturnType<typeof setInterval> | undefined;

  constructor(
    public model: string,
    public vendor: string,
    public fuelLevel: number
  ) {
    this.startupConsumption = 3;
    this.workConsumption = 1;
    this.tankCapacity = 40;
    this.model = model;
    this.vendor = vendor;
    this.fuelLevel = fuelLevel;
  }

  startEngine() {
    this.fuelLevel = this.fuelLevel - this.startupConsumption;
    this.intervalId = setInterval(() => {
      this.fuelLevel = this.fuelLevel - this.workConsumption;
    }, 1000);
  }

  stopEngine() {
    clearInterval(this.intervalId);
  }

  refuel() {
    this.fuelLevel = this.tankCapacity;
  }
}

const myCar: BaseVehicle = new Car("Octavia", "Skoda", 20);
console.log(myCar);
myCar.startEngine();
setTimeout(() => {
  myCar.stopEngine();
  console.log(myCar);
  myCar.refuel();
  console.log(myCar);
}, 7000);
