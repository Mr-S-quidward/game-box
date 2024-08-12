export interface IActionManagement<TActionModel> {
  registerActions: () => void;
  handleActions: (actionType: TActionModel, ...args: any[]) => void;
}
