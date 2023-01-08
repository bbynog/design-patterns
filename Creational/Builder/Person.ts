import IPerson from './interfaces/IPerson';

export default class Person implements IPerson {
  public name?: string;
  public sex?: string;
  public birth?: string;
}
