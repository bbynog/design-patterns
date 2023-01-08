import IGuitar from './IGuitar';
import IBass from './IBass';

export default interface IInstrumentFactory {
  createGuitar(): IGuitar;
  createBass(): IBass;
}
