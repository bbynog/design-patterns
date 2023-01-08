// Allows to create complex objects, step by step

import PersonBuilder from './PersonBuilder';
import PersonDirectorBuilder from './PersonDIrectorBuilder';

const builder = new PersonBuilder();
const director = new PersonDirectorBuilder(builder);

director.setBasicInfo('bby');
const bby = director.builder.getPerson();
console.log('🚀 ~ file: index.ts:12 ~ bby', bby);

director.setFullInfo({ name: 'gabriel', sex: 'male', birth: '04/06/95' });
const gabriel = director.builder.getPerson();
console.log('🚀 ~ file: index.ts:17 ~ gabriel', gabriel);
