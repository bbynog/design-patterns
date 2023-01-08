import IGuitar from './IGuitar';
import IInstrument from './IInstrument';

export default interface IBass extends IInstrument {
  /**
   * ...but it also can collaborate with the ProductA.
   *
   * The Abstract Factory makes sure that all products it creates are of the
   * same variant and thus, compatible.
   */
  slap(): string;
  shouldIMakeChords(
    practiceLevel: 'high' | 'medium' | 'low',
    collaborator: IGuitar
  ): string;
}
