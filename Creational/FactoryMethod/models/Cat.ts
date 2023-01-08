import ICat from '../interfaces/ICat';

export default class Cat implements ICat {
  name: string;
  weight: number;
  color: string;

  constructor({ name, weight, color }: ICat) {
    this.name = name;
    this.weight = weight;
    this.color = color;
  }

  public meow = () => {
    return 'mium!';
  };
}
