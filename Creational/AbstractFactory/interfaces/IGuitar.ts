import IInstrument from './IInstrument';

export default interface IGuitar extends IInstrument {
  makeChords(): string;
  usePick: boolean;
}
