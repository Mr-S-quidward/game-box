export interface IActions<TActionModel, P extends any[]> {
  type: TActionModel | "store";
  action: (...args: P) => void;
}
