import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {SnakeStateModel} from "../models/snake-state.model";
import * as SnakeActions from "./snake.action";
import {interval, map, switchMap, takeUntil, withLatestFrom} from "rxjs";
import {SnakeMovementsEnum} from "../models/enums/snake-movements.enum";
import {IPosition} from "../../../../models/interfaces/position.interface";
import {ElementIntersecting} from "../../../../../shared/tools/global-functions/element-intersecting.func";
import {IElementBoundingPoints} from "../../../../../shared/models/interfaces/element-bounding-points.interface";
import {getNewHeadPosition} from "../../../../../shared/tools/global-functions/get-new-head-position.func";
import {ISnakeBoard} from "../models/interfaces/snake-board.interface";
import {EffectsControllerService} from "../../../../services/effects-controller/effects-controller.service";

@Injectable()
export class SnakeEffect {
  actions$ = inject(Actions);

  constructor(
    private effectsControllerService: EffectsControllerService,
    private snakeStore: Store<{ snake: SnakeStateModel }>,
  ) {
    this.effectsControllerService.getScopeURL("snake");
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
        const head = state.snake[0];
        const food = state.food;
        const newHeadPosition = getNewHeadPosition(head.position, state.direction);
        if (state.lives > 0) {
          if (this.isSelfCollision(newHeadPosition, state.snake.map(s => s.position)) || this.isOutOfBounds(newHeadPosition, action.snakeBoard, 20, state.direction)) {
            return SnakeActions.loseLife({snakeBoard: action.snakeBoard});
          } else if (this.isFoodCollision(newHeadPosition, food, state.direction)) {
            return SnakeActions.eatFood();
          } else {
            return SnakeActions.moveSnake();
          }
        } else {
          return SnakeActions.endGame();
        }
      }),
      takeUntil(this.effectsControllerService.stopEffects()),
    )),
  ));

  private isSelfCollision(newHeadPosition: IPosition, snake: IPosition[]): boolean {
    return snake.some(segment => segment.x === newHeadPosition.x && segment.y === newHeadPosition.y);
  }

  private isOutOfBounds(newHeadPosition: IPosition, snakeBoard: ISnakeBoard, snakeSize: number, direction: SnakeMovementsEnum): boolean {
    const boardElement: IElementBoundingPoints = {
      A: {x: snakeBoard.position.x, y: snakeBoard.position.y},
      B: {x: snakeBoard.position.x + snakeBoard.width, y: snakeBoard.position.y},
      C: {x: snakeBoard.position.x + snakeBoard.width, y: snakeBoard.position.y + snakeBoard.height},
      D: {x: snakeBoard.position.x, y: snakeBoard.position.y + snakeBoard.height},
    }

    switch (direction) {
      case SnakeMovementsEnum.right:
        return !(ElementIntersecting(boardElement, {x: newHeadPosition.x + snakeSize, y: newHeadPosition.y})
          && ElementIntersecting(boardElement, {x: newHeadPosition.x + snakeSize, y: newHeadPosition.y + snakeSize}));
      case SnakeMovementsEnum.left:
        return !(ElementIntersecting(boardElement, newHeadPosition)
          && ElementIntersecting(boardElement, {x: newHeadPosition.x, y: newHeadPosition.y + snakeSize}));
      case SnakeMovementsEnum.up:
        return !(ElementIntersecting(boardElement, newHeadPosition)
          && ElementIntersecting(boardElement, {x: newHeadPosition.x + snakeSize, y: newHeadPosition.y}));
      case SnakeMovementsEnum.down:
        return !(ElementIntersecting(boardElement, {x: newHeadPosition.x, y: newHeadPosition.y + snakeSize})
          && ElementIntersecting(boardElement, {x: newHeadPosition.x + snakeSize, y: newHeadPosition.y + snakeSize}));
    }
  }

  private isFoodCollision(newHeadPosition: IPosition, food: IPosition, direction: SnakeMovementsEnum): boolean {
    const foodElement: IElementBoundingPoints = {
      A: {x: food.x, y: food.y},
      B: {x: food.x + 20, y: food.y},
      C: {x: food.x + 20, y: food.y + 20},
      D: {x: food.x, y: food.y + 20},
    }
    switch (direction) {
      case SnakeMovementsEnum.right:
        return ElementIntersecting(foodElement, {x: newHeadPosition.x + 20, y: newHeadPosition.y})
          || ElementIntersecting(foodElement, {x: newHeadPosition.x + 20, y: newHeadPosition.y + 20});
      case SnakeMovementsEnum.left:
        return ElementIntersecting(foodElement, newHeadPosition)
          || ElementIntersecting(foodElement, {x: newHeadPosition.x, y: newHeadPosition.y + 20});
      case SnakeMovementsEnum.up:
        return ElementIntersecting(foodElement, newHeadPosition)
          || ElementIntersecting(foodElement, {x: newHeadPosition.x + 20, y: newHeadPosition.y});
      case SnakeMovementsEnum.down:
        return ElementIntersecting(foodElement, {x: newHeadPosition.x, y: newHeadPosition.y + 20})
          || ElementIntersecting(foodElement, {x: newHeadPosition.x + 20, y: newHeadPosition.y + 20});
    }
  }
}
