import {Action, Store} from "@ngrx/store";
import {ActionsManagementService} from "../../services/actions-management/actions-management.service";
import {IActionManagement} from "../interfaces/action-management.interface";
import {IActions} from "../interfaces/actions.interface";

export abstract class BaseComponentModel<TViewModel, TStateModel, TActionModel> implements IActionManagement<TActionModel> {
  abstract viewModel: TViewModel;
  abstract listOfActions: IActions<TActionModel, any>[];

  constructor(
    protected store: Store<{ [p: string]: TStateModel }>,
    protected actionManagementService: ActionsManagementService<TActionModel, any>,
  ) {
  }

  protected dispatchActions(action: Action): void {
    this.store.dispatch(action);
  }

  registerActions(): void {
    let listOfActions: IActions<TActionModel, any>[] = [
      {type: "store", action: this.dispatchActions.bind(this)},
    ];
    if (this.listOfActions.length > 0) listOfActions = listOfActions.concat(this.listOfActions);
    this.actionManagementService.registerActions(listOfActions);
  }

  handleActions<TProps>(actionType: TActionModel | "store", ...args: TProps[]): void {
    this.actionManagementService.manageActions(actionType, ...args);
  }
}
