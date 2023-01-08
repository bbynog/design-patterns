import IGuitar from '../interfaces/IGuitar';
import IInstrumentFactory from '../interfaces/IInstrumentFactory';
import IBass from '../interfaces/IBass';
import AcousticGuitar from '../models/AcousticGuitar';
import AcousticBass from '../models/AcousticBass';

class AnalogicFactory implements IInstrumentFactory {
  public createGuitar(): IGuitar {
    return new AcousticGuitar();
  }

  public createBass(): IBass {
    return new AcousticBass();
  }
}

export default AnalogicFactory;
