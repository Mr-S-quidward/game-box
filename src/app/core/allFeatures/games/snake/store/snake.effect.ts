import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {SnakeStateModel} from "../models/snake-state.model";
import * as SnakeActions from "./snake.action";
import {interval, map, pipe, switchMap, withLatestFrom} from "rxjs";
import {SnakeMovementsEnum} from "../models/enums/snake-movements.enum";
import {IPosition} from "../../../../models/interfaces/position.interface";
import {ElementIntersecting} from "../../../../../shared/tools/global-functions/element-intersecting.func";
import {IElementBoundingPoints} from "../../../../../shared/models/interfaces/element-bounding-points.interface";

@Injectable()
export class SnakeEffect {
  actions$ = inject(Actions);

  constructor(
    private snakeStore: Store<{ snake: SnakeStateModel }>,
  ) {
  }

  startGame$ = createEffect(() => this.actions$.pipe(
    ofType(SnakeActions.startGame),
    map(() => SnakeActions.initializeBoard()),
  ));

  moveSnake$ = createEffect(() => this.actions$.pipe(
    ofType(SnakeActions.initializeBoard),
    switchMap(() => interval(100).pipe(
      withLatestFrom(this.snakeStore.select('snake')),
      map(([, state]: [number, SnakeStateModel]) => {
        const head = state.snake[0];
        const food = state.food;
        const newHead = this.getNewHeadPosition(head, state.direction);
        if (state.lives > 0) {
          if (this.isCollision(newHead, state.snake)) {
            return SnakeActions.loseLife();
          } else if (this.isFoodCollision(newHead, food, state.direction)) {
            return SnakeActions.eatFood();
          } else {
            return SnakeActions.moveSnake();
          }
        } else {
          return SnakeActions.endGame();
        }
      }),
    )),
  ));

  private getNewHeadPosition(head: IPosition, direction: SnakeMovementsEnum): IPosition {
    switch (direction) {
      case SnakeMovementsEnum.up:
        return {x: head.x, y: head.y - 20};
      case SnakeMovementsEnum.down:
        return {x: head.x, y: head.y + 20};
      case SnakeMovementsEnum.left:
        return {x: head.x - 20, y: head.y};
      case SnakeMovementsEnum.right:
        return {x: head.x + 20, y: head.y};
    }
  }

  private isCollision(newHead: IPosition, snake: IPosition[]): boolean {
    return snake.some(segment => segment.x === newHead.x && segment.y === newHead.y);
  }

  private isOutOfBounds(position: IPosition): boolean {
    return position.x < 0 || position.x >= 20 || position.y < 0 || position.y >= 20;
  }

  private isFoodCollision(newHead: IPosition, food: IPosition, direction: SnakeMovementsEnum): boolean {
    const foodElement: IElementBoundingPoints = {
      A: {x: food.x, y: food.y},
      B: {x: food.x + 20, y: food.y},
      C: {x: food.x + 20, y: food.y + 20},
      D: {x: food.x, y: food.y + 20},
    }
    switch (direction) {
      case SnakeMovementsEnum.right:
        return ElementIntersecting(foodElement, {x: newHead.x + 20, y: newHead.y})
          || ElementIntersecting(foodElement, {x: newHead.x + 20, y: newHead.y + 20});
      case SnakeMovementsEnum.left:
        return ElementIntersecting(foodElement, newHead)
          || ElementIntersecting(foodElement, {x: newHead.x, y: newHead.y + 20});
      case SnakeMovementsEnum.up:
        return ElementIntersecting(foodElement, newHead)
          || ElementIntersecting(foodElement, {x: newHead.x + 20, y: newHead.y});
      case SnakeMovementsEnum.down:
        return ElementIntersecting(foodElement, {x: newHead.x, y: newHead.y + 20})
          || ElementIntersecting(foodElement, {x: newHead.x + 20, y: newHead.y + 20});
    }
  }
}
