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
import {getNewHeadPosition} from "../../../../../shared/tools/global-functions/get-new-head-position.func";
import {ISnakeBoard} from "../models/interfaces/snake-board.interface";

@Injectable()
export class SnakeEffect {
  actions$ = inject(Actions);

  constructor(
    private snakeStore: Store<{ snake: SnakeStateModel }>,
  ) {
  }

  startGame$ = createEffect(() => this.actions$.pipe(
    ofType(SnakeActions.startGame),
    map((action) => SnakeActions.initializeBoard({snakeBoard: action.snakeBoard})),
  ));

  loseLife$ = createEffect(() => this.actions$.pipe(
    ofType(SnakeActions.loseLife),
    map((action) => SnakeActions.initializeBoard({snakeBoard: action.snakeBoard})),
  ));

  moveSnake$ = createEffect(() => this.actions$.pipe(
    ofType(SnakeActions.initializeBoard),
    switchMap((action) => interval(100).pipe(
      withLatestFrom(this.snakeStore.select('snake')),
      map(([, state]: [number, SnakeStateModel]) => {
        console.log('running');
        const head = state.snake[0];
        const food = state.food;
        const newHead = getNewHeadPosition(head, state.direction);
        if (state.lives > 0) {
          if (this.isSelfCollision(newHead, state.snake) || this.isOutOfBounds(newHead, action.snakeBoard, 20, state.direction)) {
            return SnakeActions.loseLife({snakeBoard: action.snakeBoard});
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

  private isSelfCollision(newHead: IPosition, snake: IPosition[]): boolean {
    return snake.some(segment => segment.x === newHead.x && segment.y === newHead.y);
  }

  private isOutOfBounds(newHead: IPosition, snakeBoard: ISnakeBoard, snakeSize: number, direction: SnakeMovementsEnum): boolean {
    const boardElement: IElementBoundingPoints = {
      A: {x: snakeBoard.position.x, y: snakeBoard.position.y},
      B: {x: snakeBoard.position.x + snakeBoard.width, y: snakeBoard.position.y},
      C: {x: snakeBoard.position.x + snakeBoard.width, y: snakeBoard.position.y + snakeBoard.height},
      D: {x: snakeBoard.position.x, y: snakeBoard.position.y + snakeBoard.height},
    }

    switch (direction) {
      case SnakeMovementsEnum.right:
        return !(ElementIntersecting(boardElement, {x: newHead.x + snakeSize, y: newHead.y})
          && ElementIntersecting(boardElement, {x: newHead.x + snakeSize, y: newHead.y + snakeSize}));
      case SnakeMovementsEnum.left:
        return !(ElementIntersecting(boardElement, newHead)
          && ElementIntersecting(boardElement, {x: newHead.x, y: newHead.y + snakeSize}));
      case SnakeMovementsEnum.up:
        return !(ElementIntersecting(boardElement, newHead)
          && ElementIntersecting(boardElement, {x: newHead.x + snakeSize, y: newHead.y}));
      case SnakeMovementsEnum.down:
        return !(ElementIntersecting(boardElement, {x: newHead.x, y: newHead.y + snakeSize})
          && ElementIntersecting(boardElement, {x: newHead.x + snakeSize, y: newHead.y + snakeSize}));
    }
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
