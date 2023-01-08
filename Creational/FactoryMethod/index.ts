import CatCreator from './CatCreator';

const bells = new CatCreator({
  name: 'bells',
  color: 'cinza com amarelo dourado',
  weight: 15
});
console.log('🚀 ~ file: index.ts:8 ~ bells', bells.generate());

const queijo = new CatCreator({
  name: 'queijo',
  color: 'cinza puxando pro claro',
  weight: 11
});

console.log('🚀 ~ file: index.ts:14 ~ queijo', queijo.generate());

const y = new CatCreator({ name: 'y', color: 'cinza mais escuro', weight: 8 });
console.log('🚀 ~ file: index.ts:16 ~ y', y);
