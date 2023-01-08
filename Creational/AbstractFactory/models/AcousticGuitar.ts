import IAcousticGuitar from '../interfaces/IAcousticGuitar';

class AcousticGuitar implements IAcousticGuitar {
  makeChords(): string {
    return 'C, D, E, G';
  }

  isItLoud: boolean = true;

  usePick: boolean = false;

  play(): string {
    return 'beautiful mellow songs';
  }
}

export default AcousticGuitar;
