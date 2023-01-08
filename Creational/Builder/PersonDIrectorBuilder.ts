import PersonBuilder from './PersonBuilder';

interface FullInfoParams {
  sex: string;
  name: string;
  birth: string;
}
export default class PersonDirectorBuilder {
  public builder: PersonBuilder;

  constructor(builder: PersonBuilder) {
    this.builder = builder;
  }

  public setBasicInfo = (name: string) => {
    this.builder.produceName(name);
  };

  public setFullInfo = ({ name, sex, birth }: FullInfoParams) => {
    this.builder.produceBirth(birth);
    this.builder.produceSex(sex);
    this.builder.produceName(name);
  };
}
