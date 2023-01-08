export default abstract class Creator<T> {
  public abstract factoryMethod: (product: T) => T;
  public abstract product: T;

  public generate = () => {
    const workedOnProduct = this.factoryMethod(this.product);

    return `product: ${JSON.stringify(workedOnProduct)}`;
  };
}
