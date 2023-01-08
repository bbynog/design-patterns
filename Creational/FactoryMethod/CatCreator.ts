import Creator from './Creator';
import ICat from './interfaces/ICat';

import Cat from './models/Cat';

export default class CatCreator extends Creator<ICat> {
  product: ICat;

  constructor({ name, weight, color }: ICat) {
    super();

    this.product = new Cat({ name, weight, color });
  }

  factoryMethod = ({ name, weight, color }: ICat) => {
    return new Cat({ name, weight, color });
  };
}
