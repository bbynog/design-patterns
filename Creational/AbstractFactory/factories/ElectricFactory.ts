import ElectricBass from '../models/ElectricBass';
import ElectricGuitar from '../models/ElectricGuitar';
import IBass from '../interfaces/IBass';
import IGuitar from '../interfaces/IGuitar';
import IInstrumentFactory from '../interfaces/IInstrumentFactory';

class ElectricFactory implements IInstrumentFactory {
  public createGuitar(): IGuitar {
    return new ElectricGuitar();
  }

  public createBass(): IBass {
    return new ElectricBass();
  }
}

export default ElectricFactory;
