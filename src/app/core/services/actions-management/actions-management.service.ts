import {Injectable} from '@angular/core';
import {IActions} from "../../models/interfaces/actions.interface";

@Injectable({
  providedIn: 'root'
})
export class ActionsManagementService<TActionsModel, P extends any[]> {
  private actionMap: Map<TActionsModel | "store", (...args: P) => void> = new Map();

  registerActions(actions: IActions<TActionsModel, P>[]): void {
    actions.forEach(({type, action}) => {
      this.actionMap.set(type, action);
    });
  }

  manageActions(actionType: TActionsModel | "store", ...args: P): void {
    const action = this.actionMap.get(actionType);
    if (!!action) action(...args);
    // TODO throw an error using notification service, pop-ups
    else alert(`Action of type "${actionType}" is not registered.`);
  }
}
