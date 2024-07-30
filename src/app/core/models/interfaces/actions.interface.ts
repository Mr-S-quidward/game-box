export interface IActions<TActionModel, P extends any[]> {
  type: TActionModel;
  action: (...args: P) => void;
}
