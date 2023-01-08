import IAcousticBass from '../interfaces/IAcousticBass';
import IGuitar from '../interfaces/IGuitar';

class AcousticBass implements IAcousticBass {
  play(): string {
    return 'tum dis tum';
  }

  isItLoud: boolean = false;

  slap(): string {
    return 'slaaaaap';
  }
  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public shouldIMakeChords(
    practiceLevel: 'high' | 'medium' | 'low',
    collaborator: IGuitar
  ): string {
    if (practiceLevel === 'low') {
      return 'no';
    } else if (practiceLevel === 'medium' || practiceLevel === 'high') {
      return 'yeah!! ' + collaborator.makeChords();
    } else {
      return 'You didnt tell your practice level';
    }
  }
}

export default AcousticBass;
