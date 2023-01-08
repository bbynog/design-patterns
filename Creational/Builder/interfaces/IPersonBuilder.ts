export default interface IPersonBuilder {
  produceName: (name: string) => void;
  produceBirth: (birth: string) => void;
  produceSex: (sex: string) => void;
}
