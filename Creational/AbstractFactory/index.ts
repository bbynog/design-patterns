// The Abstract Factory provides you with an interface for creating objects from each class of the product family.
// As long as your code creates objects via this interface, you don’t have to worry about creating the wrong variant of a
// product which doesn’t match the products already created by your app.

import AcousticGuitar from './models/AcousticGuitar';
import AnalogicFactory from './factories/AnalogicFactory';
import ElectricFactory from './factories/ElectricFactory';
import ElectricGuitar from './models/ElectricGuitar';
import IInstrumentFactory from './interfaces/IInstrumentFactory';

function clientCode(
  factory: IInstrumentFactory,
  practiceLevelOnBass: 'high' | 'medium' | 'low'
) {
  console.log('🚀 ~ file: index.ts:13 ~ factory', factory);

  const guitar = factory.createGuitar();
  const bass = factory.createBass();

  console.log('🚀 ~ file: index.ts:18 ~ clientCode ~ guitar', guitar);
  console.log('🚀 ~ file: index.ts:19 ~ clientCode ~ bass', bass);

  console.log(
    '🚀 ~ file: index.ts:22 ~ guitar.makeChords()',
    guitar.makeChords()
  );
  console.log('🚀 ~ file: index.ts:24 ~ guitar.play()', guitar.play());
  console.log('🚀 ~ file: index.ts:26 ~ guitar.usePick', guitar.usePick);

  console.log('🚀 ~ file: index.ts:30 ~ bass.play();', bass.play());
  console.log(
    '🚀 ~ file: index.ts:32 ~ bass.shouldIMakeChords(practiceLevelOnBass, guitar)',
    bass.shouldIMakeChords(practiceLevelOnBass, guitar)
  );
  console.log('🚀 ~ file: index.ts:34 ~ bass.slap()', bass.slap());
}

clientCode(new AnalogicFactory(), 'high');

clientCode(new ElectricFactory(), 'low');

// console.log('electric guitar', JSON.stringify(new ElectricGuitar()));
// console.log('electric guitar', JSON.stringify(new AcousticGuitar()));

console.log('electric guitar', new ElectricGuitar());
console.log('acoustic guitar', new AcousticGuitar());
