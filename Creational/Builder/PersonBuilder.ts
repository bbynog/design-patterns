import IPersonBuilder from './interfaces/IPersonBuilder';
import Person from './Person';

export default class PersonBuilder implements IPersonBuilder {
  private person: Person;

  constructor() {
    this.person = new Person();
  }

  public reset = () => {
    this.person = new Person();
  };

  public produceSex = (sex: string) => {
    this.person.sex = sex;
  };

  public produceName = (name: string) => {
    this.person.name = name;
  };

  public produceBirth = (birth: string) => {
    this.person.birth = birth;
  };

  public getPerson = () => {
    const person = this.person;
    this.reset();

    return person;
  };
}
