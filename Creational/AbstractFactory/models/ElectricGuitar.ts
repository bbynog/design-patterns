import IElectricGuitar from '../interfaces/IElectricGuitar';

class ElectricGuitar implements IElectricGuitar {
  makeChords(): string {
    return 'C, D, E, G';
  }

  usePick: boolean = true;

  play(): string {
    return 'beautiful mellow songs';
  }
}

export default ElectricGuitar;
