import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {SnakeStateModel} from "../models/snake-state.model";
import * as SnakeActions from "./snake.action";
import {interval, map, switchMap, withLatestFrom} from "rxjs";
import {SnakeMovementsEnum} from "../models/enums/snake-movements.enum";
import {IPosition} from "../../../../models/interfaces/position.interface";

@Injectable()
export class SnakeEffect {
  actions$ = inject(Actions);

  constructor(
    // private actions$: Actions,
    private snakeStore: Store<{ snake: SnakeStateModel }>,
  ) {
  }

  moveSnake$ = createEffect(() => this.actions$.pipe(
    ofType(SnakeActions.startGame),
    switchMap(() => interval(200).pipe(
      withLatestFrom(this.snakeStore.select('snake')),
      map(([, state]: [number, SnakeStateModel]) => {
        const head = state.snake[0];
        const food = state.food;
        const newHead = this.getNewHeadPosition(head, state.direction);

        if (this.isCollision(newHead, state.snake) || this.isOutOfBounds(newHead)) {
          return SnakeActions.loseLife();
        } else if (this.isFoodCollision(newHead, food)) {
          return SnakeActions.eatFood();
        } else {
          return SnakeActions.moveSnake();
        }
      }),
    )),
  ));

  private getNewHeadPosition(head: IPosition, direction: SnakeMovementsEnum): IPosition {
    switch (direction) {
      case SnakeMovementsEnum.up:
        return {x: head.x, y: head.y - 1};
      case SnakeMovementsEnum.down:
        return {x: head.x, y: head.y + 1};
      case SnakeMovementsEnum.left:
        return {x: head.x - 1, y: head.y};
      case SnakeMovementsEnum.right:
        return {x: head.x + 1, y: head.y};
    }
  }

  private isCollision(newHead: IPosition, snake: IPosition[]): boolean {
    return snake.some(segment => segment.x === newHead.x && segment.y === newHead.y);
  }

  private isOutOfBounds(position: IPosition): boolean {
    return position.x < 0 || position.x >= 20 || position.y < 0 || position.y >= 20;
  }

  private isFoodCollision(newHead: IPosition, food: IPosition): boolean {
    return newHead.x === food.x && newHead.y === food.y;
  }
}
