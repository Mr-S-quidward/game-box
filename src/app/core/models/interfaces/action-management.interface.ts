export interface IActionManagement<TActionModel> {
  registerActions: () => void;
  handleActions: <TProps>(actionType: TActionModel, ...args: TProps[]) => void;
}
