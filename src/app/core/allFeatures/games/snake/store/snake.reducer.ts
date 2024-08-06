import {SnakeMovementsEnum} from "../models/enums/snake-movements.enum";
import {SnakeStateModel} from "../models/snake-state.model";
import {createReducer, on} from "@ngrx/store";
import * as SnakeActions from "./snake.action";
import {getNewHeadPosition} from "../../../../../shared/tools/global-functions/get-new-head-position.func";
import {generateNewFood} from "../../../../../shared/tools/global-functions/generate-new-food.func";
import {IElementBoundingPoints} from "../../../../../shared/models/interfaces/element-bounding-points.interface";
import {ElementIntersecting} from "../../../../../shared/tools/global-functions/element-intersecting.func";
import {IPosition} from "../../../../models/interfaces/position.interface";
import {SnakeSegments} from "../models/interfaces/snake.interface";

export const initialSnakeState: SnakeStateModel = {
  board: {
    width: 800,
    height: 800,
    position: {
      x: 0,
      y: 0,
    }
  },
  snake: [
    new SnakeSegments({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }),
    new SnakeSegments({
      x: window.innerWidth / 2 - 20,
      y: window.innerHeight / 2,
    }),
    new SnakeSegments({
      x: window.innerWidth / 2 - 40,
      y: window.innerHeight / 2,
    }),
    new SnakeSegments({
      x: window.innerWidth / 2 - 60,
      y: window.innerHeight / 2,
    }),
  ],
  food: {
    x: (window.innerWidth / 2) + 60,
    y: window.innerHeight / 2,
  },
  score: 0,
  lives: 5,
  direction: SnakeMovementsEnum.right,
  isPlaying: false,
}

export const snakeReducer = createReducer(
  initialSnakeState,
  on(SnakeActions.startGame, state => ({
    ...initialSnakeState,
    isPlaying: true,
  })),
  on(SnakeActions.initializeBoard, (state, {snakeBoard}) => ({
    ...state,
    board: snakeBoard,
    snake: [
      new SnakeSegments({
        x: snakeBoard.width / 2 + snakeBoard.position.x,
        y: snakeBoard.height / 2 + snakeBoard.position.y,
      }),
      new SnakeSegments({
        x: snakeBoard.width / 2 - 20 + snakeBoard.position.x,
        y: snakeBoard.height / 2 + snakeBoard.position.y,
      }),
      new SnakeSegments({
        x: snakeBoard.width / 2 - (2 * 20) + snakeBoard.position.x,
        y: snakeBoard.height / 2 + snakeBoard.position.y,
      }),
    ],
    food: {
      x: snakeBoard.width / 2 + (3 * 20) + snakeBoard.position.x,
      y: snakeBoard.height / 2 + snakeBoard.position.y,
    },
    direction: initialSnakeState.direction,
  })),
  on(SnakeActions.changeDirection, (state, {form}) => ({
    ...state,
    direction: form.direction,
  })),
  on(SnakeActions.moveSnake, state => {
    const newSnake = [...state.snake];
    const head = newSnake[0];
    const newHeadPosition = getNewHeadPosition(head.position, state.direction);

    newSnake.unshift({id: head.id, position: newHeadPosition});
    newSnake.pop();

    return {
      ...state,
      snake: newSnake,
    }
  }),
  on(SnakeActions.eatFood, state => {
    const _foodValidator = (func: () => IPosition): IPosition => {
      let food: IPosition;
      do {
        food = func();
      }
      while (state.snake.some(segment => {
        const segmentElement: IElementBoundingPoints = {
          A: {x: segment.position.x, y: segment.position.y},
          B: {x: segment.position.x + 20, y: segment.position.y},
          C: {x: segment.position.x + 20, y: segment.position.y + 20},
          D: {x: segment.position.x, y: segment.position.y + 20},
        }
        return ElementIntersecting(segmentElement, food);
      }));
      return food;
    }
    const newFood = _foodValidator(() => generateNewFood(state.board, 20));
    const newSnake = [...state.snake, state.snake[state.snake.length - 1]];
    return {
      ...state,
      food: newFood,
      snake: newSnake,
      score: state.score + 10,
    }
  }),
  on(SnakeActions.loseLife, state => ({
    ...state,
    lives: state.lives - 1,
    isPlaying: state.lives > 1,
  })),
  on(SnakeActions.endGame, state => ({
    ...state,
    isPlaying: false,
  })),
)

export function SnakeReducer(state: any, action: any) {
  return snakeReducer(state, action);
}
